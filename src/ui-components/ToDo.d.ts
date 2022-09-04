/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import React from "react";
import { Todo } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ViewProps } from "@aws-amplify/ui-react";
export declare type ToDoProps = React.PropsWithChildren<Partial<ViewProps> & {
    todo?: Todo;
} & {
    overrides?: EscapeHatchProps | undefined | null;
}>;
export default function ToDo(props: ToDoProps): React.ReactElement;
