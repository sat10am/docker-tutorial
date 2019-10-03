import { InputType, Field } from 'type-graphql'

@InputType()
export class TodoInput {
  @Field({ nullable: true })
  id?: number

  @Field()
  title: string

  @Field()
  isCompleted: boolean
}
