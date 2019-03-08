

// ====================================================
// Documents
// ====================================================



  export type TopMenuVariables = {
  }

  export type TopMenuQuery = {
    __typename?: "Query";
    
    menuItems: Maybe<TopMenuMenuItems>;
  }

  export type TopMenuMenuItems = {
    __typename?: "RootQueryToMenuItemConnection";
    
    edges: Maybe<(Maybe<TopMenuEdges>)[]>;
  } 

  export type TopMenuEdges = {
    __typename?: "RootQueryToMenuItemConnectionEdge";
    
    node: Maybe<TopMenuNode>;
  } 

  export type TopMenuNode = {
    __typename?: "MenuItem";
    
    connectedObject: Maybe<TopMenuConnectedObject>;
  } 

  export type TopMenuConnectedObject = {
    __typename: TopMenuPageInlineFragment["__typename"] | TopMenuPostInlineFragment["__typename"];
  } (TopMenuPageInlineFragment | TopMenuPostInlineFragment)

  export type TopMenuPageInlineFragment = {
    __typename?: "Page";
    
    title: Maybe<string>;
  } 

  export type TopMenuPostInlineFragment = {
    __typename?: "Post";
    
    title: Maybe<string>;
  } 

