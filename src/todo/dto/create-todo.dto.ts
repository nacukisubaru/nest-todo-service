import { ArgNum, ArgRange } from "discord-nestjs";
import { Expose } from 'class-transformer';

export class CreateTodoDto {
    @ArgRange(() => ({formPosition: 1}))
    @Expose()
    title: string;

    @ArgRange(() => ({formPosition: 2}))
    @Expose()
    description: string;

    @ArgRange(() => ({formPosition: 3}))
    @Expose()
    isComplete: boolean;

    @ArgNum((last: number) => ({ position: last }))
    @Expose()
    groupId: number
}