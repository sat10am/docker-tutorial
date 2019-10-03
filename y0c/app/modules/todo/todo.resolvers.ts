import { Resolver, Mutation, Query, Arg } from 'type-graphql'
import { InjectRepository } from 'typeorm-typedi-extensions'
import { Repository } from 'typeorm'
import { TodoInput } from './todo.input'
import { Todo } from '../../entities/todo'

@Resolver()
export class TodoResolver {
  constructor(
    @InjectRepository(Todo) private readonly todoRepository: Repository<Todo>,
  ) {
    console.log('..')
  }

  @Query(() => [Todo])
  public async todos() {
    return this.todoRepository.find({})
  }

  @Mutation(() => Todo)
  public async addTodo(@Arg('input') { title, isCompleted }: TodoInput) {
    const todo = this.todoRepository.create({
      title,
      isCompleted,
    })

    return this.todoRepository.save(todo)
  }

  @Mutation(() => Todo)
  public async updateTodo(@Arg('input') { id, title, isCompleted }: TodoInput) {
    const todo = await this.todoRepository.findOne({ where: { id } })

    if (!todo) {
      throw new Error('todo not found')
    }

    todo.title = title
    todo.isCompleted = isCompleted

    return this.todoRepository.save(todo)
  }

  @Mutation(() => Boolean)
  public async deleteTodo(@Arg('id') id:number) {
    await this.todoRepository.delete(id)
    return true
  }
}
