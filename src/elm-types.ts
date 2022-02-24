import { cmd, react, sub } from "elm-ts";

declare type ROA = readonly any[];

export type Update<TModel, TMsg> = (msg: Readonly<TMsg>, model: Readonly<TModel>) => [TModel, cmd.Cmd<TMsg>];
export type View<TModel, TMsg> = (model: Readonly<TModel>) => react.Html<TMsg>;
export type Init<TModel, TMsg, Params extends ROA = []> = (...params: Params) => [TModel, cmd.Cmd<TMsg>];
export type Subscription<TModel, TMsg> = (model: TModel) => sub.Sub<TMsg>;
