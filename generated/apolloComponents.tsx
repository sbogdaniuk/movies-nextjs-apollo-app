export type Maybe<T> = T | null;

export interface LoginInput {
  email: string;

  password: string;
}

// ====================================================
// Documents
// ====================================================

export type HelloVariables = {};

export type HelloQuery = {
  __typename?: "Query";

  hello: Maybe<string>;
};

export type MeVariables = {};

export type MeQuery = {
  __typename?: "Query";

  me: Maybe<MeMe>;
};

export type MeMe = {
  __typename?: "User";

  id: string;

  name: string;

  isAdmin: Maybe<boolean>;

  isBanned: Maybe<boolean>;
};

export type ShowVariables = {
  id: string;
};

export type ShowQuery = {
  __typename?: "Query";

  show: Maybe<ShowShow>;
};

export type ShowShow = {
  __typename?: "Show";

  id: string;

  genres: string[];

  image: ShowImage;

  language: Maybe<string>;

  name: string;

  summary: Maybe<string>;

  type: Maybe<string>;
};

export type ShowImage = {
  __typename?: "Image";

  medium: Maybe<string>;

  original: Maybe<string>;
};

import * as ReactApollo from "react-apollo";
import * as React from "react";

import gql from "graphql-tag";

// ====================================================
// Components
// ====================================================

export const HelloDocument = gql`
  query Hello {
    hello
  }
`;
export class HelloComponent extends React.Component<
  Partial<ReactApollo.QueryProps<HelloQuery, HelloVariables>>
> {
  render() {
    return (
      <ReactApollo.Query<HelloQuery, HelloVariables>
        query={HelloDocument}
        {...(this as any)["props"] as any}
      />
    );
  }
}
export type HelloProps<TChildProps = any> = Partial<
  ReactApollo.DataProps<HelloQuery, HelloVariables>
> &
  TChildProps;
export function HelloHOC<TProps, TChildProps = any>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        HelloQuery,
        HelloVariables,
        HelloProps<TChildProps>
      >
    | undefined
) {
  return ReactApollo.graphql<
    TProps,
    HelloQuery,
    HelloVariables,
    HelloProps<TChildProps>
  >(HelloDocument, operationOptions);
}
export const MeDocument = gql`
  query Me {
    me {
      id
      name
      isAdmin
      isBanned
    }
  }
`;
export class MeComponent extends React.Component<
  Partial<ReactApollo.QueryProps<MeQuery, MeVariables>>
> {
  render() {
    return (
      <ReactApollo.Query<MeQuery, MeVariables>
        query={MeDocument}
        {...(this as any)["props"] as any}
      />
    );
  }
}
export type MeProps<TChildProps = any> = Partial<
  ReactApollo.DataProps<MeQuery, MeVariables>
> &
  TChildProps;
export function MeHOC<TProps, TChildProps = any>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        MeQuery,
        MeVariables,
        MeProps<TChildProps>
      >
    | undefined
) {
  return ReactApollo.graphql<
    TProps,
    MeQuery,
    MeVariables,
    MeProps<TChildProps>
  >(MeDocument, operationOptions);
}
export const ShowDocument = gql`
  query Show($id: ID!) {
    show(id: $id) {
      id
      genres
      image {
        medium
        original
      }
      language
      name
      summary
      type
    }
  }
`;
export class ShowComponent extends React.Component<
  Partial<ReactApollo.QueryProps<ShowQuery, ShowVariables>>
> {
  render() {
    return (
      <ReactApollo.Query<ShowQuery, ShowVariables>
        query={ShowDocument}
        {...(this as any)["props"] as any}
      />
    );
  }
}
export type ShowProps<TChildProps = any> = Partial<
  ReactApollo.DataProps<ShowQuery, ShowVariables>
> &
  TChildProps;
export function ShowHOC<TProps, TChildProps = any>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        ShowQuery,
        ShowVariables,
        ShowProps<TChildProps>
      >
    | undefined
) {
  return ReactApollo.graphql<
    TProps,
    ShowQuery,
    ShowVariables,
    ShowProps<TChildProps>
  >(ShowDocument, operationOptions);
}
