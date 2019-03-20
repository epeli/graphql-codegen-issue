export type Maybe<T> = T | null;

/** Arguments for filtering the RootQueryToCategoryConnection connection */
export interface RootQueryToCategoryConnectionWhereArgs {
    /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
    cacheDomain?: Maybe<string>;
    /** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
    childless?: Maybe<boolean>;
    /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
    childOf?: Maybe<number>;
    /** Retrieve terms where the description is LIKE the input value. Default empty. */
    descriptionLike?: Maybe<string>;
    /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
    exclude?: Maybe<(Maybe<string>)[]>;
    /** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
    excludeTree?: Maybe<(Maybe<string>)[]>;
    /** Whether to hide terms not assigned to any posts. Accepts true or false. Default true */
    hideEmpty?: Maybe<boolean>;
    /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
    hierarchical?: Maybe<boolean>;
    /** Array of term ids to include. Default empty array. */
    include?: Maybe<(Maybe<string>)[]>;
    /** Array of names to return term(s) for. Default empty. */
    name?: Maybe<(Maybe<string>)[]>;
    /** Retrieve terms where the name is LIKE the input value. Default empty. */
    nameLike?: Maybe<string>;
    /** Array of object IDs. Results will be limited to terms associated with these objects. */
    objectIds?: Maybe<(Maybe<string>)[]>;
    /** Field(s) to order terms by. Defaults to 'name'. */
    orderby?: Maybe<TermObjectsConnectionOrderbyEnum>;
    /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
    padCounts?: Maybe<boolean>;
    /** Parent term ID to retrieve direct-child terms of. Default empty. */
    parent?: Maybe<number>;
    /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
    search?: Maybe<string>;
    /** Default false. If true, only the items connected to the source item will be returned. If false, all items will be returned regardless of connection to the source */
    shouldOnlyIncludeConnectedItems?: Maybe<boolean>;
    /** Default false. If true, the connection will be output in a flat list instead of the hierarchical list. So child terms will be output in the same level as the parent terms */
    shouldOutputInFlatList?: Maybe<boolean>;
    /** Array of slugs to return term(s) for. Default empty. */
    slug?: Maybe<(Maybe<string>)[]>;
    /** Array of term taxonomy IDs, to match when querying terms. */
    termTaxonomId?: Maybe<(Maybe<string>)[]>;
    /** Whether to prime meta caches for matched terms. Default true. */
    updateTermMetaCache?: Maybe<boolean>;
}
/** Arguments for filtering the CategoryToCategoryConnection connection */
export interface CategoryToCategoryConnectionWhereArgs {
    /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
    cacheDomain?: Maybe<string>;
    /** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
    childless?: Maybe<boolean>;
    /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
    childOf?: Maybe<number>;
    /** Retrieve terms where the description is LIKE the input value. Default empty. */
    descriptionLike?: Maybe<string>;
    /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
    exclude?: Maybe<(Maybe<string>)[]>;
    /** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
    excludeTree?: Maybe<(Maybe<string>)[]>;
    /** Whether to hide terms not assigned to any posts. Accepts true or false. Default true */
    hideEmpty?: Maybe<boolean>;
    /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
    hierarchical?: Maybe<boolean>;
    /** Array of term ids to include. Default empty array. */
    include?: Maybe<(Maybe<string>)[]>;
    /** Array of names to return term(s) for. Default empty. */
    name?: Maybe<(Maybe<string>)[]>;
    /** Retrieve terms where the name is LIKE the input value. Default empty. */
    nameLike?: Maybe<string>;
    /** Array of object IDs. Results will be limited to terms associated with these objects. */
    objectIds?: Maybe<(Maybe<string>)[]>;
    /** Field(s) to order terms by. Defaults to 'name'. */
    orderby?: Maybe<TermObjectsConnectionOrderbyEnum>;
    /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
    padCounts?: Maybe<boolean>;
    /** Parent term ID to retrieve direct-child terms of. Default empty. */
    parent?: Maybe<number>;
    /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
    search?: Maybe<string>;
    /** Default false. If true, only the items connected to the source item will be returned. If false, all items will be returned regardless of connection to the source */
    shouldOnlyIncludeConnectedItems?: Maybe<boolean>;
    /** Default false. If true, the connection will be output in a flat list instead of the hierarchical list. So child terms will be output in the same level as the parent terms */
    shouldOutputInFlatList?: Maybe<boolean>;
    /** Array of slugs to return term(s) for. Default empty. */
    slug?: Maybe<(Maybe<string>)[]>;
    /** Array of term taxonomy IDs, to match when querying terms. */
    termTaxonomId?: Maybe<(Maybe<string>)[]>;
    /** Whether to prime meta caches for matched terms. Default true. */
    updateTermMetaCache?: Maybe<boolean>;
}
/** Arguments for filtering the CategoryToPostConnection connection */
export interface CategoryToPostConnectionWhereArgs {
    /** The user that's connected as the author of the object. Use the userId for the author object. */
    author?: Maybe<number>;
    /** Find objects connected to author(s) in the array of author's userIds */
    authorIn?: Maybe<(Maybe<string>)[]>;
    /** Find objects connected to the author by the author's nicename */
    authorName?: Maybe<string>;
    /** Find objects NOT connected to author(s) in the array of author's userIds */
    authorNotIn?: Maybe<(Maybe<string>)[]>;
    /** Category ID */
    categoryId?: Maybe<number>;
    /** Array of category IDs, used to display objects from one category OR another */
    categoryIn?: Maybe<(Maybe<string>)[]>;
    /** Use Category Slug */
    categoryName?: Maybe<string>;
    /** Array of category IDs, used to display objects from one category OR another */
    categoryNotIn?: Maybe<(Maybe<string>)[]>;
    /** Filter the connection based on dates */
    dateQuery?: Maybe<DateQueryInput>;
    /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
    hasPassword?: Maybe<boolean>;
    /** Specific ID of the object */
    id?: Maybe<number>;
    /** Array of IDs for the objects to retrieve */
    in?: Maybe<(Maybe<string>)[]>;
    /** Get objects with a specific mimeType property */
    mimeType?: Maybe<MimeTypeEnum>;
    /** Slug / post_name of the object */
    name?: Maybe<string>;
    /** Specify objects to retrieve. Use slugs */
    nameIn?: Maybe<(Maybe<string>)[]>;
    /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
    notIn?: Maybe<(Maybe<string>)[]>;
    /** What paramater to use to order the objects by. */
    orderby?: Maybe<(Maybe<PostObjectsConnectionOrderbyInput>)[]>;
    /** Use ID to return only children. Use 0 to return only top-level items */
    parent?: Maybe<string>;
    /** Specify objects whose parent is in an array */
    parentIn?: Maybe<(Maybe<string>)[]>;
    /** Specify posts whose parent is not in an array */
    parentNotIn?: Maybe<(Maybe<string>)[]>;
    /** Show posts with a specific password. */
    password?: Maybe<string>;
    /** Show Posts based on a keyword search */
    search?: Maybe<string>;

    stati?: Maybe<(Maybe<PostStatusEnum>)[]>;

    status?: Maybe<PostStatusEnum>;
    /** Tag Slug */
    tag?: Maybe<string>;
    /** Use Tag ID */
    tagId?: Maybe<string>;
    /** Array of tag IDs, used to display objects from one tag OR another */
    tagIn?: Maybe<(Maybe<string>)[]>;
    /** Array of tag IDs, used to display objects from one tag OR another */
    tagNotIn?: Maybe<(Maybe<string>)[]>;
    /** Array of tag slugs, used to display objects from one tag OR another */
    tagSlugAnd?: Maybe<(Maybe<string>)[]>;
    /** Array of tag slugs, used to exclude objects in specified tags */
    tagSlugIn?: Maybe<(Maybe<string>)[]>;

    taxQuery?: Maybe<CategoryToPostConnectionWhereArgsTaxQuery>;
    /** Title of the object */
    title?: Maybe<string>;
}
/** Filter the connection based on input */
export interface DateQueryInput {
    after?: Maybe<DateInput>;

    before?: Maybe<DateInput>;
    /** Column to query against */
    column?: Maybe<PostObjectsConnectionDateColumnEnum>;
    /** For after/before, whether exact value should be matched or not */
    compare?: Maybe<string>;
    /** Day of the month (from 1 to 31) */
    day?: Maybe<number>;
    /** Hour (from 0 to 23) */
    hour?: Maybe<number>;
    /** For after/before, whether exact value should be matched or not */
    inclusive?: Maybe<boolean>;
    /** Minute (from 0 to 59) */
    minute?: Maybe<number>;
    /** Month number (from 1 to 12) */
    month?: Maybe<number>;
    /** OR or AND, how the sub-arrays should be compared */
    relation?: Maybe<RelationEnum>;
    /** Second (0 to 59) */
    second?: Maybe<number>;
    /** Week of the year (from 0 to 53) */
    week?: Maybe<number>;
    /** 4 digit year (e.g. 2017) */
    year?: Maybe<number>;
}
/** Date values */
export interface DateInput {
    /** Day of the month (from 1 to 31) */
    day?: Maybe<number>;
    /** Month number (from 1 to 12) */
    month?: Maybe<number>;
    /** 4 digit year (e.g. 2017) */
    year?: Maybe<number>;
}
/** Options for ordering the connection */
export interface PostObjectsConnectionOrderbyInput {
    field: PostObjectsConnectionOrderbyEnum;

    order?: Maybe<OrderEnum>;
}
/** Query objects based on taxonomy parameters */
export interface CategoryToPostConnectionWhereArgsTaxQuery {
    relation?: Maybe<RelationEnum>;

    taxArray?: Maybe<(Maybe<CategoryToPostConnectionWhereArgsTaxArray>)[]>;
}

export interface CategoryToPostConnectionWhereArgsTaxArray {
    taxonomy?: Maybe<TaxonomyEnum>;

    field?: Maybe<CategoryToPostConnectionWhereArgsTaxQueryField>;
    /** A list of term slugs */
    terms?: Maybe<(Maybe<string>)[]>;
    /** Whether or not to include children for hierarchical  taxonomies. Defaults to false to improve performance (note that this is opposite of the default for WP_Query). */
    includeChildren?: Maybe<boolean>;

    operator?: Maybe<CategoryToPostConnectionWhereArgsTaxQueryOperator>;
}
/** Arguments for filtering the UserToCommentConnection connection */
export interface UserToCommentConnectionWhereArgs {
    /** Comment author email address. */
    authorEmail?: Maybe<string>;
    /** Array of author IDs to include comments for. */
    authorIn?: Maybe<(Maybe<string>)[]>;
    /** Array of author IDs to exclude comments for. */
    authorNotIn?: Maybe<(Maybe<string>)[]>;
    /** Comment author URL. */
    authorUrl?: Maybe<string>;
    /** Array of comment IDs to include. */
    commentIn?: Maybe<(Maybe<string>)[]>;
    /** Array of IDs of users whose unapproved comments will be returned by the query regardless of status. */
    commentNotIn?: Maybe<(Maybe<string>)[]>;
    /** Include comments of a given type. */
    commentType?: Maybe<string>;
    /** Include comments from a given array of comment types. */
    commentTypeIn?: Maybe<(Maybe<string>)[]>;
    /** Exclude comments from a given array of comment types. */
    commentTypeNotIn?: Maybe<string>;
    /** Content object author ID to limit results by. */
    contentAuthor?: Maybe<(Maybe<string>)[]>;
    /** Array of author IDs to retrieve comments for. */
    contentAuthorIn?: Maybe<(Maybe<string>)[]>;
    /** Array of author IDs *not* to retrieve comments for. */
    contentAuthorNotIn?: Maybe<(Maybe<string>)[]>;
    /** Limit results to those affiliated with a given content object ID. */
    contentId?: Maybe<string>;
    /** Array of content object IDs to include affiliated comments for. */
    contentIdIn?: Maybe<(Maybe<string>)[]>;
    /** Array of content object IDs to exclude affiliated comments for. */
    contentIdNotIn?: Maybe<(Maybe<string>)[]>;
    /** Content object name to retrieve affiliated comments for. */
    contentName?: Maybe<string>;
    /** Content Object parent ID to retrieve affiliated comments for. */
    contentParent?: Maybe<number>;
    /** Array of content object statuses to retrieve affiliated comments for. Pass 'any' to match any value. */
    contentStatus?: Maybe<(Maybe<PostStatusEnum>)[]>;
    /** Content object type or array of types to retrieve affiliated comments for. Pass 'any' to match any value. */
    contentType?: Maybe<(Maybe<PostStatusEnum>)[]>;
    /** Array of author IDs to include comments for. */
    includeUnapproved?: Maybe<(Maybe<string>)[]>;
    /** Karma score to retrieve matching comments for. */
    karma?: Maybe<number>;
    /** The cardinality of the order of the connection */
    order?: Maybe<OrderEnum>;
    /** Field to order the comments by. */
    orderby?: Maybe<CommentsConnectionOrderbyEnum>;
    /** Parent ID of comment to retrieve children of. */
    parent?: Maybe<number>;
    /** Array of parent IDs of comments to retrieve children for. */
    parentIn?: Maybe<(Maybe<string>)[]>;
    /** Array of parent IDs of comments *not* to retrieve children for. */
    parentNotIn?: Maybe<(Maybe<string>)[]>;
    /** Search term(s) to retrieve matching comments for. */
    search?: Maybe<string>;
    /** Comment status to limit results by. */
    status?: Maybe<string>;
    /** Include comments for a specific user ID. */
    userId?: Maybe<string>;
}
/** Arguments for filtering the CommentToCommentConnection connection */
export interface CommentToCommentConnectionWhereArgs {
    /** Comment author email address. */
    authorEmail?: Maybe<string>;
    /** Array of author IDs to include comments for. */
    authorIn?: Maybe<(Maybe<string>)[]>;
    /** Array of author IDs to exclude comments for. */
    authorNotIn?: Maybe<(Maybe<string>)[]>;
    /** Comment author URL. */
    authorUrl?: Maybe<string>;
    /** Array of comment IDs to include. */
    commentIn?: Maybe<(Maybe<string>)[]>;
    /** Array of IDs of users whose unapproved comments will be returned by the query regardless of status. */
    commentNotIn?: Maybe<(Maybe<string>)[]>;
    /** Include comments of a given type. */
    commentType?: Maybe<string>;
    /** Include comments from a given array of comment types. */
    commentTypeIn?: Maybe<(Maybe<string>)[]>;
    /** Exclude comments from a given array of comment types. */
    commentTypeNotIn?: Maybe<string>;
    /** Content object author ID to limit results by. */
    contentAuthor?: Maybe<(Maybe<string>)[]>;
    /** Array of author IDs to retrieve comments for. */
    contentAuthorIn?: Maybe<(Maybe<string>)[]>;
    /** Array of author IDs *not* to retrieve comments for. */
    contentAuthorNotIn?: Maybe<(Maybe<string>)[]>;
    /** Limit results to those affiliated with a given content object ID. */
    contentId?: Maybe<string>;
    /** Array of content object IDs to include affiliated comments for. */
    contentIdIn?: Maybe<(Maybe<string>)[]>;
    /** Array of content object IDs to exclude affiliated comments for. */
    contentIdNotIn?: Maybe<(Maybe<string>)[]>;
    /** Content object name to retrieve affiliated comments for. */
    contentName?: Maybe<string>;
    /** Content Object parent ID to retrieve affiliated comments for. */
    contentParent?: Maybe<number>;
    /** Array of content object statuses to retrieve affiliated comments for. Pass 'any' to match any value. */
    contentStatus?: Maybe<(Maybe<PostStatusEnum>)[]>;
    /** Content object type or array of types to retrieve affiliated comments for. Pass 'any' to match any value. */
    contentType?: Maybe<(Maybe<PostStatusEnum>)[]>;
    /** Array of author IDs to include comments for. */
    includeUnapproved?: Maybe<(Maybe<string>)[]>;
    /** Karma score to retrieve matching comments for. */
    karma?: Maybe<number>;
    /** The cardinality of the order of the connection */
    order?: Maybe<OrderEnum>;
    /** Field to order the comments by. */
    orderby?: Maybe<CommentsConnectionOrderbyEnum>;
    /** Parent ID of comment to retrieve children of. */
    parent?: Maybe<number>;
    /** Array of parent IDs of comments to retrieve children for. */
    parentIn?: Maybe<(Maybe<string>)[]>;
    /** Array of parent IDs of comments *not* to retrieve children for. */
    parentNotIn?: Maybe<(Maybe<string>)[]>;
    /** Search term(s) to retrieve matching comments for. */
    search?: Maybe<string>;
    /** Comment status to limit results by. */
    status?: Maybe<string>;
    /** Include comments for a specific user ID. */
    userId?: Maybe<string>;
}
/** Arguments for filtering the UserToDemoConnection connection */
export interface UserToDemoConnectionWhereArgs {
    /** The user that's connected as the author of the object. Use the userId for the author object. */
    author?: Maybe<number>;
    /** Find objects connected to author(s) in the array of author's userIds */
    authorIn?: Maybe<(Maybe<string>)[]>;
    /** Find objects connected to the author by the author's nicename */
    authorName?: Maybe<string>;
    /** Find objects NOT connected to author(s) in the array of author's userIds */
    authorNotIn?: Maybe<(Maybe<string>)[]>;
    /** Category ID */
    categoryId?: Maybe<number>;
    /** Array of category IDs, used to display objects from one category OR another */
    categoryIn?: Maybe<(Maybe<string>)[]>;
    /** Use Category Slug */
    categoryName?: Maybe<string>;
    /** Array of category IDs, used to display objects from one category OR another */
    categoryNotIn?: Maybe<(Maybe<string>)[]>;
    /** Filter the connection based on dates */
    dateQuery?: Maybe<DateQueryInput>;
    /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
    hasPassword?: Maybe<boolean>;
    /** Specific ID of the object */
    id?: Maybe<number>;
    /** Array of IDs for the objects to retrieve */
    in?: Maybe<(Maybe<string>)[]>;
    /** Get objects with a specific mimeType property */
    mimeType?: Maybe<MimeTypeEnum>;
    /** Slug / post_name of the object */
    name?: Maybe<string>;
    /** Specify objects to retrieve. Use slugs */
    nameIn?: Maybe<(Maybe<string>)[]>;
    /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
    notIn?: Maybe<(Maybe<string>)[]>;
    /** What paramater to use to order the objects by. */
    orderby?: Maybe<(Maybe<PostObjectsConnectionOrderbyInput>)[]>;
    /** Use ID to return only children. Use 0 to return only top-level items */
    parent?: Maybe<string>;
    /** Specify objects whose parent is in an array */
    parentIn?: Maybe<(Maybe<string>)[]>;
    /** Specify posts whose parent is not in an array */
    parentNotIn?: Maybe<(Maybe<string>)[]>;
    /** Show posts with a specific password. */
    password?: Maybe<string>;
    /** Show Posts based on a keyword search */
    search?: Maybe<string>;

    stati?: Maybe<(Maybe<PostStatusEnum>)[]>;

    status?: Maybe<PostStatusEnum>;
    /** Tag Slug */
    tag?: Maybe<string>;
    /** Use Tag ID */
    tagId?: Maybe<string>;
    /** Array of tag IDs, used to display objects from one tag OR another */
    tagIn?: Maybe<(Maybe<string>)[]>;
    /** Array of tag IDs, used to display objects from one tag OR another */
    tagNotIn?: Maybe<(Maybe<string>)[]>;
    /** Array of tag slugs, used to display objects from one tag OR another */
    tagSlugAnd?: Maybe<(Maybe<string>)[]>;
    /** Array of tag slugs, used to exclude objects in specified tags */
    tagSlugIn?: Maybe<(Maybe<string>)[]>;

    taxQuery?: Maybe<UserToDemoConnectionWhereArgsTaxQuery>;
    /** Title of the object */
    title?: Maybe<string>;
}
/** Query objects based on taxonomy parameters */
export interface UserToDemoConnectionWhereArgsTaxQuery {
    relation?: Maybe<RelationEnum>;

    taxArray?: Maybe<(Maybe<UserToDemoConnectionWhereArgsTaxArray>)[]>;
}

export interface UserToDemoConnectionWhereArgsTaxArray {
    taxonomy?: Maybe<TaxonomyEnum>;

    field?: Maybe<UserToDemoConnectionWhereArgsTaxQueryField>;
    /** A list of term slugs */
    terms?: Maybe<(Maybe<string>)[]>;
    /** Whether or not to include children for hierarchical  taxonomies. Defaults to false to improve performance (note that this is opposite of the default for WP_Query). */
    includeChildren?: Maybe<boolean>;

    operator?: Maybe<UserToDemoConnectionWhereArgsTaxQueryOperator>;
}
/** Arguments for filtering the TagToPostConnection connection */
export interface TagToPostConnectionWhereArgs {
    /** The user that's connected as the author of the object. Use the userId for the author object. */
    author?: Maybe<number>;
    /** Find objects connected to author(s) in the array of author's userIds */
    authorIn?: Maybe<(Maybe<string>)[]>;
    /** Find objects connected to the author by the author's nicename */
    authorName?: Maybe<string>;
    /** Find objects NOT connected to author(s) in the array of author's userIds */
    authorNotIn?: Maybe<(Maybe<string>)[]>;
    /** Category ID */
    categoryId?: Maybe<number>;
    /** Array of category IDs, used to display objects from one category OR another */
    categoryIn?: Maybe<(Maybe<string>)[]>;
    /** Use Category Slug */
    categoryName?: Maybe<string>;
    /** Array of category IDs, used to display objects from one category OR another */
    categoryNotIn?: Maybe<(Maybe<string>)[]>;
    /** Filter the connection based on dates */
    dateQuery?: Maybe<DateQueryInput>;
    /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
    hasPassword?: Maybe<boolean>;
    /** Specific ID of the object */
    id?: Maybe<number>;
    /** Array of IDs for the objects to retrieve */
    in?: Maybe<(Maybe<string>)[]>;
    /** Get objects with a specific mimeType property */
    mimeType?: Maybe<MimeTypeEnum>;
    /** Slug / post_name of the object */
    name?: Maybe<string>;
    /** Specify objects to retrieve. Use slugs */
    nameIn?: Maybe<(Maybe<string>)[]>;
    /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
    notIn?: Maybe<(Maybe<string>)[]>;
    /** What paramater to use to order the objects by. */
    orderby?: Maybe<(Maybe<PostObjectsConnectionOrderbyInput>)[]>;
    /** Use ID to return only children. Use 0 to return only top-level items */
    parent?: Maybe<string>;
    /** Specify objects whose parent is in an array */
    parentIn?: Maybe<(Maybe<string>)[]>;
    /** Specify posts whose parent is not in an array */
    parentNotIn?: Maybe<(Maybe<string>)[]>;
    /** Show posts with a specific password. */
    password?: Maybe<string>;
    /** Show Posts based on a keyword search */
    search?: Maybe<string>;

    stati?: Maybe<(Maybe<PostStatusEnum>)[]>;

    status?: Maybe<PostStatusEnum>;
    /** Tag Slug */
    tag?: Maybe<string>;
    /** Use Tag ID */
    tagId?: Maybe<string>;
    /** Array of tag IDs, used to display objects from one tag OR another */
    tagIn?: Maybe<(Maybe<string>)[]>;
    /** Array of tag IDs, used to display objects from one tag OR another */
    tagNotIn?: Maybe<(Maybe<string>)[]>;
    /** Array of tag slugs, used to display objects from one tag OR another */
    tagSlugAnd?: Maybe<(Maybe<string>)[]>;
    /** Array of tag slugs, used to exclude objects in specified tags */
    tagSlugIn?: Maybe<(Maybe<string>)[]>;

    taxQuery?: Maybe<TagToPostConnectionWhereArgsTaxQuery>;
    /** Title of the object */
    title?: Maybe<string>;
}
/** Query objects based on taxonomy parameters */
export interface TagToPostConnectionWhereArgsTaxQuery {
    relation?: Maybe<RelationEnum>;

    taxArray?: Maybe<(Maybe<TagToPostConnectionWhereArgsTaxArray>)[]>;
}

export interface TagToPostConnectionWhereArgsTaxArray {
    taxonomy?: Maybe<TaxonomyEnum>;

    field?: Maybe<TagToPostConnectionWhereArgsTaxQueryField>;
    /** A list of term slugs */
    terms?: Maybe<(Maybe<string>)[]>;
    /** Whether or not to include children for hierarchical  taxonomies. Defaults to false to improve performance (note that this is opposite of the default for WP_Query). */
    includeChildren?: Maybe<boolean>;

    operator?: Maybe<TagToPostConnectionWhereArgsTaxQueryOperator>;
}
/** Arguments for filtering the UserToMediaItemConnection connection */
export interface UserToMediaItemConnectionWhereArgs {
    /** The user that's connected as the author of the object. Use the userId for the author object. */
    author?: Maybe<number>;
    /** Find objects connected to author(s) in the array of author's userIds */
    authorIn?: Maybe<(Maybe<string>)[]>;
    /** Find objects connected to the author by the author's nicename */
    authorName?: Maybe<string>;
    /** Find objects NOT connected to author(s) in the array of author's userIds */
    authorNotIn?: Maybe<(Maybe<string>)[]>;
    /** Category ID */
    categoryId?: Maybe<number>;
    /** Array of category IDs, used to display objects from one category OR another */
    categoryIn?: Maybe<(Maybe<string>)[]>;
    /** Use Category Slug */
    categoryName?: Maybe<string>;
    /** Array of category IDs, used to display objects from one category OR another */
    categoryNotIn?: Maybe<(Maybe<string>)[]>;
    /** Filter the connection based on dates */
    dateQuery?: Maybe<DateQueryInput>;
    /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
    hasPassword?: Maybe<boolean>;
    /** Specific ID of the object */
    id?: Maybe<number>;
    /** Array of IDs for the objects to retrieve */
    in?: Maybe<(Maybe<string>)[]>;
    /** Get objects with a specific mimeType property */
    mimeType?: Maybe<MimeTypeEnum>;
    /** Slug / post_name of the object */
    name?: Maybe<string>;
    /** Specify objects to retrieve. Use slugs */
    nameIn?: Maybe<(Maybe<string>)[]>;
    /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
    notIn?: Maybe<(Maybe<string>)[]>;
    /** What paramater to use to order the objects by. */
    orderby?: Maybe<(Maybe<PostObjectsConnectionOrderbyInput>)[]>;
    /** Use ID to return only children. Use 0 to return only top-level items */
    parent?: Maybe<string>;
    /** Specify objects whose parent is in an array */
    parentIn?: Maybe<(Maybe<string>)[]>;
    /** Specify posts whose parent is not in an array */
    parentNotIn?: Maybe<(Maybe<string>)[]>;
    /** Show posts with a specific password. */
    password?: Maybe<string>;
    /** Show Posts based on a keyword search */
    search?: Maybe<string>;

    stati?: Maybe<(Maybe<PostStatusEnum>)[]>;

    status?: Maybe<PostStatusEnum>;
    /** Tag Slug */
    tag?: Maybe<string>;
    /** Use Tag ID */
    tagId?: Maybe<string>;
    /** Array of tag IDs, used to display objects from one tag OR another */
    tagIn?: Maybe<(Maybe<string>)[]>;
    /** Array of tag IDs, used to display objects from one tag OR another */
    tagNotIn?: Maybe<(Maybe<string>)[]>;
    /** Array of tag slugs, used to display objects from one tag OR another */
    tagSlugAnd?: Maybe<(Maybe<string>)[]>;
    /** Array of tag slugs, used to exclude objects in specified tags */
    tagSlugIn?: Maybe<(Maybe<string>)[]>;

    taxQuery?: Maybe<UserToMediaItemConnectionWhereArgsTaxQuery>;
    /** Title of the object */
    title?: Maybe<string>;
}
/** Query objects based on taxonomy parameters */
export interface UserToMediaItemConnectionWhereArgsTaxQuery {
    relation?: Maybe<RelationEnum>;

    taxArray?: Maybe<(Maybe<UserToMediaItemConnectionWhereArgsTaxArray>)[]>;
}

export interface UserToMediaItemConnectionWhereArgsTaxArray {
    taxonomy?: Maybe<TaxonomyEnum>;

    field?: Maybe<UserToMediaItemConnectionWhereArgsTaxQueryField>;
    /** A list of term slugs */
    terms?: Maybe<(Maybe<string>)[]>;
    /** Whether or not to include children for hierarchical  taxonomies. Defaults to false to improve performance (note that this is opposite of the default for WP_Query). */
    includeChildren?: Maybe<boolean>;

    operator?: Maybe<UserToMediaItemConnectionWhereArgsTaxQueryOperator>;
}
/** Arguments for filtering the MediaItemToCommentConnection connection */
export interface MediaItemToCommentConnectionWhereArgs {
    /** Comment author email address. */
    authorEmail?: Maybe<string>;
    /** Array of author IDs to include comments for. */
    authorIn?: Maybe<(Maybe<string>)[]>;
    /** Array of author IDs to exclude comments for. */
    authorNotIn?: Maybe<(Maybe<string>)[]>;
    /** Comment author URL. */
    authorUrl?: Maybe<string>;
    /** Array of comment IDs to include. */
    commentIn?: Maybe<(Maybe<string>)[]>;
    /** Array of IDs of users whose unapproved comments will be returned by the query regardless of status. */
    commentNotIn?: Maybe<(Maybe<string>)[]>;
    /** Include comments of a given type. */
    commentType?: Maybe<string>;
    /** Include comments from a given array of comment types. */
    commentTypeIn?: Maybe<(Maybe<string>)[]>;
    /** Exclude comments from a given array of comment types. */
    commentTypeNotIn?: Maybe<string>;
    /** Content object author ID to limit results by. */
    contentAuthor?: Maybe<(Maybe<string>)[]>;
    /** Array of author IDs to retrieve comments for. */
    contentAuthorIn?: Maybe<(Maybe<string>)[]>;
    /** Array of author IDs *not* to retrieve comments for. */
    contentAuthorNotIn?: Maybe<(Maybe<string>)[]>;
    /** Limit results to those affiliated with a given content object ID. */
    contentId?: Maybe<string>;
    /** Array of content object IDs to include affiliated comments for. */
    contentIdIn?: Maybe<(Maybe<string>)[]>;
    /** Array of content object IDs to exclude affiliated comments for. */
    contentIdNotIn?: Maybe<(Maybe<string>)[]>;
    /** Content object name to retrieve affiliated comments for. */
    contentName?: Maybe<string>;
    /** Content Object parent ID to retrieve affiliated comments for. */
    contentParent?: Maybe<number>;
    /** Array of content object statuses to retrieve affiliated comments for. Pass 'any' to match any value. */
    contentStatus?: Maybe<(Maybe<PostStatusEnum>)[]>;
    /** Content object type or array of types to retrieve affiliated comments for. Pass 'any' to match any value. */
    contentType?: Maybe<(Maybe<PostStatusEnum>)[]>;
    /** Array of author IDs to include comments for. */
    includeUnapproved?: Maybe<(Maybe<string>)[]>;
    /** Karma score to retrieve matching comments for. */
    karma?: Maybe<number>;
    /** The cardinality of the order of the connection */
    order?: Maybe<OrderEnum>;
    /** Field to order the comments by. */
    orderby?: Maybe<CommentsConnectionOrderbyEnum>;
    /** Parent ID of comment to retrieve children of. */
    parent?: Maybe<number>;
    /** Array of parent IDs of comments to retrieve children for. */
    parentIn?: Maybe<(Maybe<string>)[]>;
    /** Array of parent IDs of comments *not* to retrieve children for. */
    parentNotIn?: Maybe<(Maybe<string>)[]>;
    /** Search term(s) to retrieve matching comments for. */
    search?: Maybe<string>;
    /** Comment status to limit results by. */
    status?: Maybe<string>;
    /** Include comments for a specific user ID. */
    userId?: Maybe<string>;
}
/** Arguments for filtering the UserToPageConnection connection */
export interface UserToPageConnectionWhereArgs {
    /** The user that's connected as the author of the object. Use the userId for the author object. */
    author?: Maybe<number>;
    /** Find objects connected to author(s) in the array of author's userIds */
    authorIn?: Maybe<(Maybe<string>)[]>;
    /** Find objects connected to the author by the author's nicename */
    authorName?: Maybe<string>;
    /** Find objects NOT connected to author(s) in the array of author's userIds */
    authorNotIn?: Maybe<(Maybe<string>)[]>;
    /** Category ID */
    categoryId?: Maybe<number>;
    /** Array of category IDs, used to display objects from one category OR another */
    categoryIn?: Maybe<(Maybe<string>)[]>;
    /** Use Category Slug */
    categoryName?: Maybe<string>;
    /** Array of category IDs, used to display objects from one category OR another */
    categoryNotIn?: Maybe<(Maybe<string>)[]>;
    /** Filter the connection based on dates */
    dateQuery?: Maybe<DateQueryInput>;
    /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
    hasPassword?: Maybe<boolean>;
    /** Specific ID of the object */
    id?: Maybe<number>;
    /** Array of IDs for the objects to retrieve */
    in?: Maybe<(Maybe<string>)[]>;
    /** Get objects with a specific mimeType property */
    mimeType?: Maybe<MimeTypeEnum>;
    /** Slug / post_name of the object */
    name?: Maybe<string>;
    /** Specify objects to retrieve. Use slugs */
    nameIn?: Maybe<(Maybe<string>)[]>;
    /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
    notIn?: Maybe<(Maybe<string>)[]>;
    /** What paramater to use to order the objects by. */
    orderby?: Maybe<(Maybe<PostObjectsConnectionOrderbyInput>)[]>;
    /** Use ID to return only children. Use 0 to return only top-level items */
    parent?: Maybe<string>;
    /** Specify objects whose parent is in an array */
    parentIn?: Maybe<(Maybe<string>)[]>;
    /** Specify posts whose parent is not in an array */
    parentNotIn?: Maybe<(Maybe<string>)[]>;
    /** Show posts with a specific password. */
    password?: Maybe<string>;
    /** Show Posts based on a keyword search */
    search?: Maybe<string>;

    stati?: Maybe<(Maybe<PostStatusEnum>)[]>;

    status?: Maybe<PostStatusEnum>;
    /** Tag Slug */
    tag?: Maybe<string>;
    /** Use Tag ID */
    tagId?: Maybe<string>;
    /** Array of tag IDs, used to display objects from one tag OR another */
    tagIn?: Maybe<(Maybe<string>)[]>;
    /** Array of tag IDs, used to display objects from one tag OR another */
    tagNotIn?: Maybe<(Maybe<string>)[]>;
    /** Array of tag slugs, used to display objects from one tag OR another */
    tagSlugAnd?: Maybe<(Maybe<string>)[]>;
    /** Array of tag slugs, used to exclude objects in specified tags */
    tagSlugIn?: Maybe<(Maybe<string>)[]>;

    taxQuery?: Maybe<UserToPageConnectionWhereArgsTaxQuery>;
    /** Title of the object */
    title?: Maybe<string>;
}
/** Query objects based on taxonomy parameters */
export interface UserToPageConnectionWhereArgsTaxQuery {
    relation?: Maybe<RelationEnum>;

    taxArray?: Maybe<(Maybe<UserToPageConnectionWhereArgsTaxArray>)[]>;
}

export interface UserToPageConnectionWhereArgsTaxArray {
    taxonomy?: Maybe<TaxonomyEnum>;

    field?: Maybe<UserToPageConnectionWhereArgsTaxQueryField>;
    /** A list of term slugs */
    terms?: Maybe<(Maybe<string>)[]>;
    /** Whether or not to include children for hierarchical  taxonomies. Defaults to false to improve performance (note that this is opposite of the default for WP_Query). */
    includeChildren?: Maybe<boolean>;

    operator?: Maybe<UserToPageConnectionWhereArgsTaxQueryOperator>;
}
/** Arguments for filtering the UserToPostConnection connection */
export interface UserToPostConnectionWhereArgs {
    /** The user that's connected as the author of the object. Use the userId for the author object. */
    author?: Maybe<number>;
    /** Find objects connected to author(s) in the array of author's userIds */
    authorIn?: Maybe<(Maybe<string>)[]>;
    /** Find objects connected to the author by the author's nicename */
    authorName?: Maybe<string>;
    /** Find objects NOT connected to author(s) in the array of author's userIds */
    authorNotIn?: Maybe<(Maybe<string>)[]>;
    /** Category ID */
    categoryId?: Maybe<number>;
    /** Array of category IDs, used to display objects from one category OR another */
    categoryIn?: Maybe<(Maybe<string>)[]>;
    /** Use Category Slug */
    categoryName?: Maybe<string>;
    /** Array of category IDs, used to display objects from one category OR another */
    categoryNotIn?: Maybe<(Maybe<string>)[]>;
    /** Filter the connection based on dates */
    dateQuery?: Maybe<DateQueryInput>;
    /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
    hasPassword?: Maybe<boolean>;
    /** Specific ID of the object */
    id?: Maybe<number>;
    /** Array of IDs for the objects to retrieve */
    in?: Maybe<(Maybe<string>)[]>;
    /** Get objects with a specific mimeType property */
    mimeType?: Maybe<MimeTypeEnum>;
    /** Slug / post_name of the object */
    name?: Maybe<string>;
    /** Specify objects to retrieve. Use slugs */
    nameIn?: Maybe<(Maybe<string>)[]>;
    /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
    notIn?: Maybe<(Maybe<string>)[]>;
    /** What paramater to use to order the objects by. */
    orderby?: Maybe<(Maybe<PostObjectsConnectionOrderbyInput>)[]>;
    /** Use ID to return only children. Use 0 to return only top-level items */
    parent?: Maybe<string>;
    /** Specify objects whose parent is in an array */
    parentIn?: Maybe<(Maybe<string>)[]>;
    /** Specify posts whose parent is not in an array */
    parentNotIn?: Maybe<(Maybe<string>)[]>;
    /** Show posts with a specific password. */
    password?: Maybe<string>;
    /** Show Posts based on a keyword search */
    search?: Maybe<string>;

    stati?: Maybe<(Maybe<PostStatusEnum>)[]>;

    status?: Maybe<PostStatusEnum>;
    /** Tag Slug */
    tag?: Maybe<string>;
    /** Use Tag ID */
    tagId?: Maybe<string>;
    /** Array of tag IDs, used to display objects from one tag OR another */
    tagIn?: Maybe<(Maybe<string>)[]>;
    /** Array of tag IDs, used to display objects from one tag OR another */
    tagNotIn?: Maybe<(Maybe<string>)[]>;
    /** Array of tag slugs, used to display objects from one tag OR another */
    tagSlugAnd?: Maybe<(Maybe<string>)[]>;
    /** Array of tag slugs, used to exclude objects in specified tags */
    tagSlugIn?: Maybe<(Maybe<string>)[]>;

    taxQuery?: Maybe<UserToPostConnectionWhereArgsTaxQuery>;
    /** Title of the object */
    title?: Maybe<string>;
}
/** Query objects based on taxonomy parameters */
export interface UserToPostConnectionWhereArgsTaxQuery {
    relation?: Maybe<RelationEnum>;

    taxArray?: Maybe<(Maybe<UserToPostConnectionWhereArgsTaxArray>)[]>;
}

export interface UserToPostConnectionWhereArgsTaxArray {
    taxonomy?: Maybe<TaxonomyEnum>;

    field?: Maybe<UserToPostConnectionWhereArgsTaxQueryField>;
    /** A list of term slugs */
    terms?: Maybe<(Maybe<string>)[]>;
    /** Whether or not to include children for hierarchical  taxonomies. Defaults to false to improve performance (note that this is opposite of the default for WP_Query). */
    includeChildren?: Maybe<boolean>;

    operator?: Maybe<UserToPostConnectionWhereArgsTaxQueryOperator>;
}
/** Arguments for filtering the UserToRevisionConnection connection */
export interface UserToRevisionConnectionWhereArgs {
    /** The user that's connected as the author of the object. Use the userId for the author object. */
    author?: Maybe<number>;
    /** Find objects connected to author(s) in the array of author's userIds */
    authorIn?: Maybe<(Maybe<string>)[]>;
    /** Find objects connected to the author by the author's nicename */
    authorName?: Maybe<string>;
    /** Find objects NOT connected to author(s) in the array of author's userIds */
    authorNotIn?: Maybe<(Maybe<string>)[]>;
    /** Category ID */
    categoryId?: Maybe<number>;
    /** Array of category IDs, used to display objects from one category OR another */
    categoryIn?: Maybe<(Maybe<string>)[]>;
    /** Use Category Slug */
    categoryName?: Maybe<string>;
    /** Array of category IDs, used to display objects from one category OR another */
    categoryNotIn?: Maybe<(Maybe<string>)[]>;
    /** Filter the connection based on dates */
    dateQuery?: Maybe<DateQueryInput>;
    /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
    hasPassword?: Maybe<boolean>;
    /** Specific ID of the object */
    id?: Maybe<number>;
    /** Array of IDs for the objects to retrieve */
    in?: Maybe<(Maybe<string>)[]>;
    /** Get objects with a specific mimeType property */
    mimeType?: Maybe<MimeTypeEnum>;
    /** Slug / post_name of the object */
    name?: Maybe<string>;
    /** Specify objects to retrieve. Use slugs */
    nameIn?: Maybe<(Maybe<string>)[]>;
    /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
    notIn?: Maybe<(Maybe<string>)[]>;
    /** What paramater to use to order the objects by. */
    orderby?: Maybe<(Maybe<PostObjectsConnectionOrderbyInput>)[]>;
    /** Use ID to return only children. Use 0 to return only top-level items */
    parent?: Maybe<string>;
    /** Specify objects whose parent is in an array */
    parentIn?: Maybe<(Maybe<string>)[]>;
    /** Specify posts whose parent is not in an array */
    parentNotIn?: Maybe<(Maybe<string>)[]>;
    /** Show posts with a specific password. */
    password?: Maybe<string>;
    /** Show Posts based on a keyword search */
    search?: Maybe<string>;

    stati?: Maybe<(Maybe<PostStatusEnum>)[]>;

    status?: Maybe<PostStatusEnum>;
    /** Tag Slug */
    tag?: Maybe<string>;
    /** Use Tag ID */
    tagId?: Maybe<string>;
    /** Array of tag IDs, used to display objects from one tag OR another */
    tagIn?: Maybe<(Maybe<string>)[]>;
    /** Array of tag IDs, used to display objects from one tag OR another */
    tagNotIn?: Maybe<(Maybe<string>)[]>;
    /** Array of tag slugs, used to display objects from one tag OR another */
    tagSlugAnd?: Maybe<(Maybe<string>)[]>;
    /** Array of tag slugs, used to exclude objects in specified tags */
    tagSlugIn?: Maybe<(Maybe<string>)[]>;

    taxQuery?: Maybe<UserToRevisionConnectionWhereArgsTaxQuery>;
    /** Title of the object */
    title?: Maybe<string>;
}
/** Query objects based on taxonomy parameters */
export interface UserToRevisionConnectionWhereArgsTaxQuery {
    relation?: Maybe<RelationEnum>;

    taxArray?: Maybe<(Maybe<UserToRevisionConnectionWhereArgsTaxArray>)[]>;
}

export interface UserToRevisionConnectionWhereArgsTaxArray {
    taxonomy?: Maybe<TaxonomyEnum>;

    field?: Maybe<UserToRevisionConnectionWhereArgsTaxQueryField>;
    /** A list of term slugs */
    terms?: Maybe<(Maybe<string>)[]>;
    /** Whether or not to include children for hierarchical  taxonomies. Defaults to false to improve performance (note that this is opposite of the default for WP_Query). */
    includeChildren?: Maybe<boolean>;

    operator?: Maybe<UserToRevisionConnectionWhereArgsTaxQueryOperator>;
}
/** Arguments for filtering the PageToPageConnection connection */
export interface PageToPageConnectionWhereArgs {
    /** The user that's connected as the author of the object. Use the userId for the author object. */
    author?: Maybe<number>;
    /** Find objects connected to author(s) in the array of author's userIds */
    authorIn?: Maybe<(Maybe<string>)[]>;
    /** Find objects connected to the author by the author's nicename */
    authorName?: Maybe<string>;
    /** Find objects NOT connected to author(s) in the array of author's userIds */
    authorNotIn?: Maybe<(Maybe<string>)[]>;
    /** Category ID */
    categoryId?: Maybe<number>;
    /** Array of category IDs, used to display objects from one category OR another */
    categoryIn?: Maybe<(Maybe<string>)[]>;
    /** Use Category Slug */
    categoryName?: Maybe<string>;
    /** Array of category IDs, used to display objects from one category OR another */
    categoryNotIn?: Maybe<(Maybe<string>)[]>;
    /** Filter the connection based on dates */
    dateQuery?: Maybe<DateQueryInput>;
    /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
    hasPassword?: Maybe<boolean>;
    /** Specific ID of the object */
    id?: Maybe<number>;
    /** Array of IDs for the objects to retrieve */
    in?: Maybe<(Maybe<string>)[]>;
    /** Get objects with a specific mimeType property */
    mimeType?: Maybe<MimeTypeEnum>;
    /** Slug / post_name of the object */
    name?: Maybe<string>;
    /** Specify objects to retrieve. Use slugs */
    nameIn?: Maybe<(Maybe<string>)[]>;
    /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
    notIn?: Maybe<(Maybe<string>)[]>;
    /** What paramater to use to order the objects by. */
    orderby?: Maybe<(Maybe<PostObjectsConnectionOrderbyInput>)[]>;
    /** Use ID to return only children. Use 0 to return only top-level items */
    parent?: Maybe<string>;
    /** Specify objects whose parent is in an array */
    parentIn?: Maybe<(Maybe<string>)[]>;
    /** Specify posts whose parent is not in an array */
    parentNotIn?: Maybe<(Maybe<string>)[]>;
    /** Show posts with a specific password. */
    password?: Maybe<string>;
    /** Show Posts based on a keyword search */
    search?: Maybe<string>;

    stati?: Maybe<(Maybe<PostStatusEnum>)[]>;

    status?: Maybe<PostStatusEnum>;
    /** Tag Slug */
    tag?: Maybe<string>;
    /** Use Tag ID */
    tagId?: Maybe<string>;
    /** Array of tag IDs, used to display objects from one tag OR another */
    tagIn?: Maybe<(Maybe<string>)[]>;
    /** Array of tag IDs, used to display objects from one tag OR another */
    tagNotIn?: Maybe<(Maybe<string>)[]>;
    /** Array of tag slugs, used to display objects from one tag OR another */
    tagSlugAnd?: Maybe<(Maybe<string>)[]>;
    /** Array of tag slugs, used to exclude objects in specified tags */
    tagSlugIn?: Maybe<(Maybe<string>)[]>;

    taxQuery?: Maybe<PageToPageConnectionWhereArgsTaxQuery>;
    /** Title of the object */
    title?: Maybe<string>;
}
/** Query objects based on taxonomy parameters */
export interface PageToPageConnectionWhereArgsTaxQuery {
    relation?: Maybe<RelationEnum>;

    taxArray?: Maybe<(Maybe<PageToPageConnectionWhereArgsTaxArray>)[]>;
}

export interface PageToPageConnectionWhereArgsTaxArray {
    taxonomy?: Maybe<TaxonomyEnum>;

    field?: Maybe<PageToPageConnectionWhereArgsTaxQueryField>;
    /** A list of term slugs */
    terms?: Maybe<(Maybe<string>)[]>;
    /** Whether or not to include children for hierarchical  taxonomies. Defaults to false to improve performance (note that this is opposite of the default for WP_Query). */
    includeChildren?: Maybe<boolean>;

    operator?: Maybe<PageToPageConnectionWhereArgsTaxQueryOperator>;
}
/** Arguments for filtering the PageToCommentConnection connection */
export interface PageToCommentConnectionWhereArgs {
    /** Comment author email address. */
    authorEmail?: Maybe<string>;
    /** Array of author IDs to include comments for. */
    authorIn?: Maybe<(Maybe<string>)[]>;
    /** Array of author IDs to exclude comments for. */
    authorNotIn?: Maybe<(Maybe<string>)[]>;
    /** Comment author URL. */
    authorUrl?: Maybe<string>;
    /** Array of comment IDs to include. */
    commentIn?: Maybe<(Maybe<string>)[]>;
    /** Array of IDs of users whose unapproved comments will be returned by the query regardless of status. */
    commentNotIn?: Maybe<(Maybe<string>)[]>;
    /** Include comments of a given type. */
    commentType?: Maybe<string>;
    /** Include comments from a given array of comment types. */
    commentTypeIn?: Maybe<(Maybe<string>)[]>;
    /** Exclude comments from a given array of comment types. */
    commentTypeNotIn?: Maybe<string>;
    /** Content object author ID to limit results by. */
    contentAuthor?: Maybe<(Maybe<string>)[]>;
    /** Array of author IDs to retrieve comments for. */
    contentAuthorIn?: Maybe<(Maybe<string>)[]>;
    /** Array of author IDs *not* to retrieve comments for. */
    contentAuthorNotIn?: Maybe<(Maybe<string>)[]>;
    /** Limit results to those affiliated with a given content object ID. */
    contentId?: Maybe<string>;
    /** Array of content object IDs to include affiliated comments for. */
    contentIdIn?: Maybe<(Maybe<string>)[]>;
    /** Array of content object IDs to exclude affiliated comments for. */
    contentIdNotIn?: Maybe<(Maybe<string>)[]>;
    /** Content object name to retrieve affiliated comments for. */
    contentName?: Maybe<string>;
    /** Content Object parent ID to retrieve affiliated comments for. */
    contentParent?: Maybe<number>;
    /** Array of content object statuses to retrieve affiliated comments for. Pass 'any' to match any value. */
    contentStatus?: Maybe<(Maybe<PostStatusEnum>)[]>;
    /** Content object type or array of types to retrieve affiliated comments for. Pass 'any' to match any value. */
    contentType?: Maybe<(Maybe<PostStatusEnum>)[]>;
    /** Array of author IDs to include comments for. */
    includeUnapproved?: Maybe<(Maybe<string>)[]>;
    /** Karma score to retrieve matching comments for. */
    karma?: Maybe<number>;
    /** The cardinality of the order of the connection */
    order?: Maybe<OrderEnum>;
    /** Field to order the comments by. */
    orderby?: Maybe<CommentsConnectionOrderbyEnum>;
    /** Parent ID of comment to retrieve children of. */
    parent?: Maybe<number>;
    /** Array of parent IDs of comments to retrieve children for. */
    parentIn?: Maybe<(Maybe<string>)[]>;
    /** Array of parent IDs of comments *not* to retrieve children for. */
    parentNotIn?: Maybe<(Maybe<string>)[]>;
    /** Search term(s) to retrieve matching comments for. */
    search?: Maybe<string>;
    /** Comment status to limit results by. */
    status?: Maybe<string>;
    /** Include comments for a specific user ID. */
    userId?: Maybe<string>;
}
/** Arguments for filtering the PostToCategoryConnection connection */
export interface PostToCategoryConnectionWhereArgs {
    /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
    cacheDomain?: Maybe<string>;
    /** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
    childless?: Maybe<boolean>;
    /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
    childOf?: Maybe<number>;
    /** Retrieve terms where the description is LIKE the input value. Default empty. */
    descriptionLike?: Maybe<string>;
    /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
    exclude?: Maybe<(Maybe<string>)[]>;
    /** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
    excludeTree?: Maybe<(Maybe<string>)[]>;
    /** Whether to hide terms not assigned to any posts. Accepts true or false. Default true */
    hideEmpty?: Maybe<boolean>;
    /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
    hierarchical?: Maybe<boolean>;
    /** Array of term ids to include. Default empty array. */
    include?: Maybe<(Maybe<string>)[]>;
    /** Array of names to return term(s) for. Default empty. */
    name?: Maybe<(Maybe<string>)[]>;
    /** Retrieve terms where the name is LIKE the input value. Default empty. */
    nameLike?: Maybe<string>;
    /** Array of object IDs. Results will be limited to terms associated with these objects. */
    objectIds?: Maybe<(Maybe<string>)[]>;
    /** Field(s) to order terms by. Defaults to 'name'. */
    orderby?: Maybe<TermObjectsConnectionOrderbyEnum>;
    /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
    padCounts?: Maybe<boolean>;
    /** Parent term ID to retrieve direct-child terms of. Default empty. */
    parent?: Maybe<number>;
    /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
    search?: Maybe<string>;
    /** Default false. If true, only the items connected to the source item will be returned. If false, all items will be returned regardless of connection to the source */
    shouldOnlyIncludeConnectedItems?: Maybe<boolean>;
    /** Default false. If true, the connection will be output in a flat list instead of the hierarchical list. So child terms will be output in the same level as the parent terms */
    shouldOutputInFlatList?: Maybe<boolean>;
    /** Array of slugs to return term(s) for. Default empty. */
    slug?: Maybe<(Maybe<string>)[]>;
    /** Array of term taxonomy IDs, to match when querying terms. */
    termTaxonomId?: Maybe<(Maybe<string>)[]>;
    /** Whether to prime meta caches for matched terms. Default true. */
    updateTermMetaCache?: Maybe<boolean>;
}
/** Arguments for filtering the PostToCommentConnection connection */
export interface PostToCommentConnectionWhereArgs {
    /** Comment author email address. */
    authorEmail?: Maybe<string>;
    /** Array of author IDs to include comments for. */
    authorIn?: Maybe<(Maybe<string>)[]>;
    /** Array of author IDs to exclude comments for. */
    authorNotIn?: Maybe<(Maybe<string>)[]>;
    /** Comment author URL. */
    authorUrl?: Maybe<string>;
    /** Array of comment IDs to include. */
    commentIn?: Maybe<(Maybe<string>)[]>;
    /** Array of IDs of users whose unapproved comments will be returned by the query regardless of status. */
    commentNotIn?: Maybe<(Maybe<string>)[]>;
    /** Include comments of a given type. */
    commentType?: Maybe<string>;
    /** Include comments from a given array of comment types. */
    commentTypeIn?: Maybe<(Maybe<string>)[]>;
    /** Exclude comments from a given array of comment types. */
    commentTypeNotIn?: Maybe<string>;
    /** Content object author ID to limit results by. */
    contentAuthor?: Maybe<(Maybe<string>)[]>;
    /** Array of author IDs to retrieve comments for. */
    contentAuthorIn?: Maybe<(Maybe<string>)[]>;
    /** Array of author IDs *not* to retrieve comments for. */
    contentAuthorNotIn?: Maybe<(Maybe<string>)[]>;
    /** Limit results to those affiliated with a given content object ID. */
    contentId?: Maybe<string>;
    /** Array of content object IDs to include affiliated comments for. */
    contentIdIn?: Maybe<(Maybe<string>)[]>;
    /** Array of content object IDs to exclude affiliated comments for. */
    contentIdNotIn?: Maybe<(Maybe<string>)[]>;
    /** Content object name to retrieve affiliated comments for. */
    contentName?: Maybe<string>;
    /** Content Object parent ID to retrieve affiliated comments for. */
    contentParent?: Maybe<number>;
    /** Array of content object statuses to retrieve affiliated comments for. Pass 'any' to match any value. */
    contentStatus?: Maybe<(Maybe<PostStatusEnum>)[]>;
    /** Content object type or array of types to retrieve affiliated comments for. Pass 'any' to match any value. */
    contentType?: Maybe<(Maybe<PostStatusEnum>)[]>;
    /** Array of author IDs to include comments for. */
    includeUnapproved?: Maybe<(Maybe<string>)[]>;
    /** Karma score to retrieve matching comments for. */
    karma?: Maybe<number>;
    /** The cardinality of the order of the connection */
    order?: Maybe<OrderEnum>;
    /** Field to order the comments by. */
    orderby?: Maybe<CommentsConnectionOrderbyEnum>;
    /** Parent ID of comment to retrieve children of. */
    parent?: Maybe<number>;
    /** Array of parent IDs of comments to retrieve children for. */
    parentIn?: Maybe<(Maybe<string>)[]>;
    /** Array of parent IDs of comments *not* to retrieve children for. */
    parentNotIn?: Maybe<(Maybe<string>)[]>;
    /** Search term(s) to retrieve matching comments for. */
    search?: Maybe<string>;
    /** Comment status to limit results by. */
    status?: Maybe<string>;
    /** Include comments for a specific user ID. */
    userId?: Maybe<string>;
}
/** Arguments for filtering the PostToTagConnection connection */
export interface PostToTagConnectionWhereArgs {
    /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
    cacheDomain?: Maybe<string>;
    /** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
    childless?: Maybe<boolean>;
    /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
    childOf?: Maybe<number>;
    /** Retrieve terms where the description is LIKE the input value. Default empty. */
    descriptionLike?: Maybe<string>;
    /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
    exclude?: Maybe<(Maybe<string>)[]>;
    /** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
    excludeTree?: Maybe<(Maybe<string>)[]>;
    /** Whether to hide terms not assigned to any posts. Accepts true or false. Default true */
    hideEmpty?: Maybe<boolean>;
    /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
    hierarchical?: Maybe<boolean>;
    /** Array of term ids to include. Default empty array. */
    include?: Maybe<(Maybe<string>)[]>;
    /** Array of names to return term(s) for. Default empty. */
    name?: Maybe<(Maybe<string>)[]>;
    /** Retrieve terms where the name is LIKE the input value. Default empty. */
    nameLike?: Maybe<string>;
    /** Array of object IDs. Results will be limited to terms associated with these objects. */
    objectIds?: Maybe<(Maybe<string>)[]>;
    /** Field(s) to order terms by. Defaults to 'name'. */
    orderby?: Maybe<TermObjectsConnectionOrderbyEnum>;
    /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
    padCounts?: Maybe<boolean>;
    /** Parent term ID to retrieve direct-child terms of. Default empty. */
    parent?: Maybe<number>;
    /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
    search?: Maybe<string>;
    /** Default false. If true, only the items connected to the source item will be returned. If false, all items will be returned regardless of connection to the source */
    shouldOnlyIncludeConnectedItems?: Maybe<boolean>;
    /** Default false. If true, the connection will be output in a flat list instead of the hierarchical list. So child terms will be output in the same level as the parent terms */
    shouldOutputInFlatList?: Maybe<boolean>;
    /** Array of slugs to return term(s) for. Default empty. */
    slug?: Maybe<(Maybe<string>)[]>;
    /** Array of term taxonomy IDs, to match when querying terms. */
    termTaxonomId?: Maybe<(Maybe<string>)[]>;
    /** Whether to prime meta caches for matched terms. Default true. */
    updateTermMetaCache?: Maybe<boolean>;
}
/** Arguments for filtering the RootQueryToCommentConnection connection */
export interface RootQueryToCommentConnectionWhereArgs {
    /** Comment author email address. */
    authorEmail?: Maybe<string>;
    /** Array of author IDs to include comments for. */
    authorIn?: Maybe<(Maybe<string>)[]>;
    /** Array of author IDs to exclude comments for. */
    authorNotIn?: Maybe<(Maybe<string>)[]>;
    /** Comment author URL. */
    authorUrl?: Maybe<string>;
    /** Array of comment IDs to include. */
    commentIn?: Maybe<(Maybe<string>)[]>;
    /** Array of IDs of users whose unapproved comments will be returned by the query regardless of status. */
    commentNotIn?: Maybe<(Maybe<string>)[]>;
    /** Include comments of a given type. */
    commentType?: Maybe<string>;
    /** Include comments from a given array of comment types. */
    commentTypeIn?: Maybe<(Maybe<string>)[]>;
    /** Exclude comments from a given array of comment types. */
    commentTypeNotIn?: Maybe<string>;
    /** Content object author ID to limit results by. */
    contentAuthor?: Maybe<(Maybe<string>)[]>;
    /** Array of author IDs to retrieve comments for. */
    contentAuthorIn?: Maybe<(Maybe<string>)[]>;
    /** Array of author IDs *not* to retrieve comments for. */
    contentAuthorNotIn?: Maybe<(Maybe<string>)[]>;
    /** Limit results to those affiliated with a given content object ID. */
    contentId?: Maybe<string>;
    /** Array of content object IDs to include affiliated comments for. */
    contentIdIn?: Maybe<(Maybe<string>)[]>;
    /** Array of content object IDs to exclude affiliated comments for. */
    contentIdNotIn?: Maybe<(Maybe<string>)[]>;
    /** Content object name to retrieve affiliated comments for. */
    contentName?: Maybe<string>;
    /** Content Object parent ID to retrieve affiliated comments for. */
    contentParent?: Maybe<number>;
    /** Array of content object statuses to retrieve affiliated comments for. Pass 'any' to match any value. */
    contentStatus?: Maybe<(Maybe<PostStatusEnum>)[]>;
    /** Content object type or array of types to retrieve affiliated comments for. Pass 'any' to match any value. */
    contentType?: Maybe<(Maybe<PostStatusEnum>)[]>;
    /** Array of author IDs to include comments for. */
    includeUnapproved?: Maybe<(Maybe<string>)[]>;
    /** Karma score to retrieve matching comments for. */
    karma?: Maybe<number>;
    /** The cardinality of the order of the connection */
    order?: Maybe<OrderEnum>;
    /** Field to order the comments by. */
    orderby?: Maybe<CommentsConnectionOrderbyEnum>;
    /** Parent ID of comment to retrieve children of. */
    parent?: Maybe<number>;
    /** Array of parent IDs of comments to retrieve children for. */
    parentIn?: Maybe<(Maybe<string>)[]>;
    /** Array of parent IDs of comments *not* to retrieve children for. */
    parentNotIn?: Maybe<(Maybe<string>)[]>;
    /** Search term(s) to retrieve matching comments for. */
    search?: Maybe<string>;
    /** Comment status to limit results by. */
    status?: Maybe<string>;
    /** Include comments for a specific user ID. */
    userId?: Maybe<string>;
}
/** Arguments for filtering the RootQueryToDemoConnection connection */
export interface RootQueryToDemoConnectionWhereArgs {
    /** The user that's connected as the author of the object. Use the userId for the author object. */
    author?: Maybe<number>;
    /** Find objects connected to author(s) in the array of author's userIds */
    authorIn?: Maybe<(Maybe<string>)[]>;
    /** Find objects connected to the author by the author's nicename */
    authorName?: Maybe<string>;
    /** Find objects NOT connected to author(s) in the array of author's userIds */
    authorNotIn?: Maybe<(Maybe<string>)[]>;
    /** Category ID */
    categoryId?: Maybe<number>;
    /** Array of category IDs, used to display objects from one category OR another */
    categoryIn?: Maybe<(Maybe<string>)[]>;
    /** Use Category Slug */
    categoryName?: Maybe<string>;
    /** Array of category IDs, used to display objects from one category OR another */
    categoryNotIn?: Maybe<(Maybe<string>)[]>;
    /** Filter the connection based on dates */
    dateQuery?: Maybe<DateQueryInput>;
    /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
    hasPassword?: Maybe<boolean>;
    /** Specific ID of the object */
    id?: Maybe<number>;
    /** Array of IDs for the objects to retrieve */
    in?: Maybe<(Maybe<string>)[]>;
    /** Get objects with a specific mimeType property */
    mimeType?: Maybe<MimeTypeEnum>;
    /** Slug / post_name of the object */
    name?: Maybe<string>;
    /** Specify objects to retrieve. Use slugs */
    nameIn?: Maybe<(Maybe<string>)[]>;
    /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
    notIn?: Maybe<(Maybe<string>)[]>;
    /** What paramater to use to order the objects by. */
    orderby?: Maybe<(Maybe<PostObjectsConnectionOrderbyInput>)[]>;
    /** Use ID to return only children. Use 0 to return only top-level items */
    parent?: Maybe<string>;
    /** Specify objects whose parent is in an array */
    parentIn?: Maybe<(Maybe<string>)[]>;
    /** Specify posts whose parent is not in an array */
    parentNotIn?: Maybe<(Maybe<string>)[]>;
    /** Show posts with a specific password. */
    password?: Maybe<string>;
    /** Show Posts based on a keyword search */
    search?: Maybe<string>;

    stati?: Maybe<(Maybe<PostStatusEnum>)[]>;

    status?: Maybe<PostStatusEnum>;
    /** Tag Slug */
    tag?: Maybe<string>;
    /** Use Tag ID */
    tagId?: Maybe<string>;
    /** Array of tag IDs, used to display objects from one tag OR another */
    tagIn?: Maybe<(Maybe<string>)[]>;
    /** Array of tag IDs, used to display objects from one tag OR another */
    tagNotIn?: Maybe<(Maybe<string>)[]>;
    /** Array of tag slugs, used to display objects from one tag OR another */
    tagSlugAnd?: Maybe<(Maybe<string>)[]>;
    /** Array of tag slugs, used to exclude objects in specified tags */
    tagSlugIn?: Maybe<(Maybe<string>)[]>;

    taxQuery?: Maybe<RootQueryToDemoConnectionWhereArgsTaxQuery>;
    /** Title of the object */
    title?: Maybe<string>;
}
/** Query objects based on taxonomy parameters */
export interface RootQueryToDemoConnectionWhereArgsTaxQuery {
    relation?: Maybe<RelationEnum>;

    taxArray?: Maybe<(Maybe<RootQueryToDemoConnectionWhereArgsTaxArray>)[]>;
}

export interface RootQueryToDemoConnectionWhereArgsTaxArray {
    taxonomy?: Maybe<TaxonomyEnum>;

    field?: Maybe<RootQueryToDemoConnectionWhereArgsTaxQueryField>;
    /** A list of term slugs */
    terms?: Maybe<(Maybe<string>)[]>;
    /** Whether or not to include children for hierarchical  taxonomies. Defaults to false to improve performance (note that this is opposite of the default for WP_Query). */
    includeChildren?: Maybe<boolean>;

    operator?: Maybe<RootQueryToDemoConnectionWhereArgsTaxQueryOperator>;
}
/** Arguments for filtering the RootQueryToMediaItemConnection connection */
export interface RootQueryToMediaItemConnectionWhereArgs {
    /** The user that's connected as the author of the object. Use the userId for the author object. */
    author?: Maybe<number>;
    /** Find objects connected to author(s) in the array of author's userIds */
    authorIn?: Maybe<(Maybe<string>)[]>;
    /** Find objects connected to the author by the author's nicename */
    authorName?: Maybe<string>;
    /** Find objects NOT connected to author(s) in the array of author's userIds */
    authorNotIn?: Maybe<(Maybe<string>)[]>;
    /** Category ID */
    categoryId?: Maybe<number>;
    /** Array of category IDs, used to display objects from one category OR another */
    categoryIn?: Maybe<(Maybe<string>)[]>;
    /** Use Category Slug */
    categoryName?: Maybe<string>;
    /** Array of category IDs, used to display objects from one category OR another */
    categoryNotIn?: Maybe<(Maybe<string>)[]>;
    /** Filter the connection based on dates */
    dateQuery?: Maybe<DateQueryInput>;
    /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
    hasPassword?: Maybe<boolean>;
    /** Specific ID of the object */
    id?: Maybe<number>;
    /** Array of IDs for the objects to retrieve */
    in?: Maybe<(Maybe<string>)[]>;
    /** Get objects with a specific mimeType property */
    mimeType?: Maybe<MimeTypeEnum>;
    /** Slug / post_name of the object */
    name?: Maybe<string>;
    /** Specify objects to retrieve. Use slugs */
    nameIn?: Maybe<(Maybe<string>)[]>;
    /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
    notIn?: Maybe<(Maybe<string>)[]>;
    /** What paramater to use to order the objects by. */
    orderby?: Maybe<(Maybe<PostObjectsConnectionOrderbyInput>)[]>;
    /** Use ID to return only children. Use 0 to return only top-level items */
    parent?: Maybe<string>;
    /** Specify objects whose parent is in an array */
    parentIn?: Maybe<(Maybe<string>)[]>;
    /** Specify posts whose parent is not in an array */
    parentNotIn?: Maybe<(Maybe<string>)[]>;
    /** Show posts with a specific password. */
    password?: Maybe<string>;
    /** Show Posts based on a keyword search */
    search?: Maybe<string>;

    stati?: Maybe<(Maybe<PostStatusEnum>)[]>;

    status?: Maybe<PostStatusEnum>;
    /** Tag Slug */
    tag?: Maybe<string>;
    /** Use Tag ID */
    tagId?: Maybe<string>;
    /** Array of tag IDs, used to display objects from one tag OR another */
    tagIn?: Maybe<(Maybe<string>)[]>;
    /** Array of tag IDs, used to display objects from one tag OR another */
    tagNotIn?: Maybe<(Maybe<string>)[]>;
    /** Array of tag slugs, used to display objects from one tag OR another */
    tagSlugAnd?: Maybe<(Maybe<string>)[]>;
    /** Array of tag slugs, used to exclude objects in specified tags */
    tagSlugIn?: Maybe<(Maybe<string>)[]>;

    taxQuery?: Maybe<RootQueryToMediaItemConnectionWhereArgsTaxQuery>;
    /** Title of the object */
    title?: Maybe<string>;
}
/** Query objects based on taxonomy parameters */
export interface RootQueryToMediaItemConnectionWhereArgsTaxQuery {
    relation?: Maybe<RelationEnum>;

    taxArray?: Maybe<
        (Maybe<RootQueryToMediaItemConnectionWhereArgsTaxArray>)[]
    >;
}

export interface RootQueryToMediaItemConnectionWhereArgsTaxArray {
    taxonomy?: Maybe<TaxonomyEnum>;

    field?: Maybe<RootQueryToMediaItemConnectionWhereArgsTaxQueryField>;
    /** A list of term slugs */
    terms?: Maybe<(Maybe<string>)[]>;
    /** Whether or not to include children for hierarchical  taxonomies. Defaults to false to improve performance (note that this is opposite of the default for WP_Query). */
    includeChildren?: Maybe<boolean>;

    operator?: Maybe<RootQueryToMediaItemConnectionWhereArgsTaxQueryOperator>;
}
/** Arguments for filtering the MenuToMenuItemConnection connection */
export interface MenuToMenuItemConnectionWhereArgs {
    /** The ID of the object */
    id?: Maybe<number>;
    /** The menu location for the menu being queried */
    location?: Maybe<MenuLocationEnum>;
}
/** Arguments for filtering the MenuItemToMenuItemConnection connection */
export interface MenuItemToMenuItemConnectionWhereArgs {
    /** The ID of the object */
    id?: Maybe<number>;
    /** The menu location for the menu being queried */
    location?: Maybe<MenuLocationEnum>;
}
/** Arguments for filtering the RootQueryToMenuItemConnection connection */
export interface RootQueryToMenuItemConnectionWhereArgs {
    /** The ID of the object */
    id?: Maybe<number>;
    /** The menu location for the menu being queried */
    location?: Maybe<MenuLocationEnum>;
}
/** Arguments for filtering the RootQueryToMenuConnection connection */
export interface RootQueryToMenuConnectionWhereArgs {
    /** The ID of the object */
    id?: Maybe<number>;
    /** The menu location for the menu being queried */
    location?: Maybe<MenuLocationEnum>;
    /** The slug of the menu to query items for */
    slug?: Maybe<string>;
}
/** Arguments for filtering the RootQueryToPageConnection connection */
export interface RootQueryToPageConnectionWhereArgs {
    /** The user that's connected as the author of the object. Use the userId for the author object. */
    author?: Maybe<number>;
    /** Find objects connected to author(s) in the array of author's userIds */
    authorIn?: Maybe<(Maybe<string>)[]>;
    /** Find objects connected to the author by the author's nicename */
    authorName?: Maybe<string>;
    /** Find objects NOT connected to author(s) in the array of author's userIds */
    authorNotIn?: Maybe<(Maybe<string>)[]>;
    /** Category ID */
    categoryId?: Maybe<number>;
    /** Array of category IDs, used to display objects from one category OR another */
    categoryIn?: Maybe<(Maybe<string>)[]>;
    /** Use Category Slug */
    categoryName?: Maybe<string>;
    /** Array of category IDs, used to display objects from one category OR another */
    categoryNotIn?: Maybe<(Maybe<string>)[]>;
    /** Filter the connection based on dates */
    dateQuery?: Maybe<DateQueryInput>;
    /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
    hasPassword?: Maybe<boolean>;
    /** Specific ID of the object */
    id?: Maybe<number>;
    /** Array of IDs for the objects to retrieve */
    in?: Maybe<(Maybe<string>)[]>;
    /** Get objects with a specific mimeType property */
    mimeType?: Maybe<MimeTypeEnum>;
    /** Slug / post_name of the object */
    name?: Maybe<string>;
    /** Specify objects to retrieve. Use slugs */
    nameIn?: Maybe<(Maybe<string>)[]>;
    /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
    notIn?: Maybe<(Maybe<string>)[]>;
    /** What paramater to use to order the objects by. */
    orderby?: Maybe<(Maybe<PostObjectsConnectionOrderbyInput>)[]>;
    /** Use ID to return only children. Use 0 to return only top-level items */
    parent?: Maybe<string>;
    /** Specify objects whose parent is in an array */
    parentIn?: Maybe<(Maybe<string>)[]>;
    /** Specify posts whose parent is not in an array */
    parentNotIn?: Maybe<(Maybe<string>)[]>;
    /** Show posts with a specific password. */
    password?: Maybe<string>;
    /** Show Posts based on a keyword search */
    search?: Maybe<string>;

    stati?: Maybe<(Maybe<PostStatusEnum>)[]>;

    status?: Maybe<PostStatusEnum>;
    /** Tag Slug */
    tag?: Maybe<string>;
    /** Use Tag ID */
    tagId?: Maybe<string>;
    /** Array of tag IDs, used to display objects from one tag OR another */
    tagIn?: Maybe<(Maybe<string>)[]>;
    /** Array of tag IDs, used to display objects from one tag OR another */
    tagNotIn?: Maybe<(Maybe<string>)[]>;
    /** Array of tag slugs, used to display objects from one tag OR another */
    tagSlugAnd?: Maybe<(Maybe<string>)[]>;
    /** Array of tag slugs, used to exclude objects in specified tags */
    tagSlugIn?: Maybe<(Maybe<string>)[]>;

    taxQuery?: Maybe<RootQueryToPageConnectionWhereArgsTaxQuery>;
    /** Title of the object */
    title?: Maybe<string>;
}
/** Query objects based on taxonomy parameters */
export interface RootQueryToPageConnectionWhereArgsTaxQuery {
    relation?: Maybe<RelationEnum>;

    taxArray?: Maybe<(Maybe<RootQueryToPageConnectionWhereArgsTaxArray>)[]>;
}

export interface RootQueryToPageConnectionWhereArgsTaxArray {
    taxonomy?: Maybe<TaxonomyEnum>;

    field?: Maybe<RootQueryToPageConnectionWhereArgsTaxQueryField>;
    /** A list of term slugs */
    terms?: Maybe<(Maybe<string>)[]>;
    /** Whether or not to include children for hierarchical  taxonomies. Defaults to false to improve performance (note that this is opposite of the default for WP_Query). */
    includeChildren?: Maybe<boolean>;

    operator?: Maybe<RootQueryToPageConnectionWhereArgsTaxQueryOperator>;
}
/** Arguments for filtering the RootQueryToPostConnection connection */
export interface RootQueryToPostConnectionWhereArgs {
    /** The user that's connected as the author of the object. Use the userId for the author object. */
    author?: Maybe<number>;
    /** Find objects connected to author(s) in the array of author's userIds */
    authorIn?: Maybe<(Maybe<string>)[]>;
    /** Find objects connected to the author by the author's nicename */
    authorName?: Maybe<string>;
    /** Find objects NOT connected to author(s) in the array of author's userIds */
    authorNotIn?: Maybe<(Maybe<string>)[]>;
    /** Category ID */
    categoryId?: Maybe<number>;
    /** Array of category IDs, used to display objects from one category OR another */
    categoryIn?: Maybe<(Maybe<string>)[]>;
    /** Use Category Slug */
    categoryName?: Maybe<string>;
    /** Array of category IDs, used to display objects from one category OR another */
    categoryNotIn?: Maybe<(Maybe<string>)[]>;
    /** Filter the connection based on dates */
    dateQuery?: Maybe<DateQueryInput>;
    /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
    hasPassword?: Maybe<boolean>;
    /** Specific ID of the object */
    id?: Maybe<number>;
    /** Array of IDs for the objects to retrieve */
    in?: Maybe<(Maybe<string>)[]>;
    /** Get objects with a specific mimeType property */
    mimeType?: Maybe<MimeTypeEnum>;
    /** Slug / post_name of the object */
    name?: Maybe<string>;
    /** Specify objects to retrieve. Use slugs */
    nameIn?: Maybe<(Maybe<string>)[]>;
    /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
    notIn?: Maybe<(Maybe<string>)[]>;
    /** What paramater to use to order the objects by. */
    orderby?: Maybe<(Maybe<PostObjectsConnectionOrderbyInput>)[]>;
    /** Use ID to return only children. Use 0 to return only top-level items */
    parent?: Maybe<string>;
    /** Specify objects whose parent is in an array */
    parentIn?: Maybe<(Maybe<string>)[]>;
    /** Specify posts whose parent is not in an array */
    parentNotIn?: Maybe<(Maybe<string>)[]>;
    /** Show posts with a specific password. */
    password?: Maybe<string>;
    /** Show Posts based on a keyword search */
    search?: Maybe<string>;

    stati?: Maybe<(Maybe<PostStatusEnum>)[]>;

    status?: Maybe<PostStatusEnum>;
    /** Tag Slug */
    tag?: Maybe<string>;
    /** Use Tag ID */
    tagId?: Maybe<string>;
    /** Array of tag IDs, used to display objects from one tag OR another */
    tagIn?: Maybe<(Maybe<string>)[]>;
    /** Array of tag IDs, used to display objects from one tag OR another */
    tagNotIn?: Maybe<(Maybe<string>)[]>;
    /** Array of tag slugs, used to display objects from one tag OR another */
    tagSlugAnd?: Maybe<(Maybe<string>)[]>;
    /** Array of tag slugs, used to exclude objects in specified tags */
    tagSlugIn?: Maybe<(Maybe<string>)[]>;

    taxQuery?: Maybe<RootQueryToPostConnectionWhereArgsTaxQuery>;
    /** Title of the object */
    title?: Maybe<string>;
}
/** Query objects based on taxonomy parameters */
export interface RootQueryToPostConnectionWhereArgsTaxQuery {
    relation?: Maybe<RelationEnum>;

    taxArray?: Maybe<(Maybe<RootQueryToPostConnectionWhereArgsTaxArray>)[]>;
}

export interface RootQueryToPostConnectionWhereArgsTaxArray {
    taxonomy?: Maybe<TaxonomyEnum>;

    field?: Maybe<RootQueryToPostConnectionWhereArgsTaxQueryField>;
    /** A list of term slugs */
    terms?: Maybe<(Maybe<string>)[]>;
    /** Whether or not to include children for hierarchical  taxonomies. Defaults to false to improve performance (note that this is opposite of the default for WP_Query). */
    includeChildren?: Maybe<boolean>;

    operator?: Maybe<RootQueryToPostConnectionWhereArgsTaxQueryOperator>;
}
/** Arguments for filtering the RootQueryToRevisionConnection connection */
export interface RootQueryToRevisionConnectionWhereArgs {
    /** The user that's connected as the author of the object. Use the userId for the author object. */
    author?: Maybe<number>;
    /** Find objects connected to author(s) in the array of author's userIds */
    authorIn?: Maybe<(Maybe<string>)[]>;
    /** Find objects connected to the author by the author's nicename */
    authorName?: Maybe<string>;
    /** Find objects NOT connected to author(s) in the array of author's userIds */
    authorNotIn?: Maybe<(Maybe<string>)[]>;
    /** Category ID */
    categoryId?: Maybe<number>;
    /** Array of category IDs, used to display objects from one category OR another */
    categoryIn?: Maybe<(Maybe<string>)[]>;
    /** Use Category Slug */
    categoryName?: Maybe<string>;
    /** Array of category IDs, used to display objects from one category OR another */
    categoryNotIn?: Maybe<(Maybe<string>)[]>;
    /** Filter the connection based on dates */
    dateQuery?: Maybe<DateQueryInput>;
    /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
    hasPassword?: Maybe<boolean>;
    /** Specific ID of the object */
    id?: Maybe<number>;
    /** Array of IDs for the objects to retrieve */
    in?: Maybe<(Maybe<string>)[]>;
    /** Get objects with a specific mimeType property */
    mimeType?: Maybe<MimeTypeEnum>;
    /** Slug / post_name of the object */
    name?: Maybe<string>;
    /** Specify objects to retrieve. Use slugs */
    nameIn?: Maybe<(Maybe<string>)[]>;
    /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
    notIn?: Maybe<(Maybe<string>)[]>;
    /** What paramater to use to order the objects by. */
    orderby?: Maybe<(Maybe<PostObjectsConnectionOrderbyInput>)[]>;
    /** Use ID to return only children. Use 0 to return only top-level items */
    parent?: Maybe<string>;
    /** Specify objects whose parent is in an array */
    parentIn?: Maybe<(Maybe<string>)[]>;
    /** Specify posts whose parent is not in an array */
    parentNotIn?: Maybe<(Maybe<string>)[]>;
    /** Show posts with a specific password. */
    password?: Maybe<string>;
    /** Show Posts based on a keyword search */
    search?: Maybe<string>;

    stati?: Maybe<(Maybe<PostStatusEnum>)[]>;

    status?: Maybe<PostStatusEnum>;
    /** Tag Slug */
    tag?: Maybe<string>;
    /** Use Tag ID */
    tagId?: Maybe<string>;
    /** Array of tag IDs, used to display objects from one tag OR another */
    tagIn?: Maybe<(Maybe<string>)[]>;
    /** Array of tag IDs, used to display objects from one tag OR another */
    tagNotIn?: Maybe<(Maybe<string>)[]>;
    /** Array of tag slugs, used to display objects from one tag OR another */
    tagSlugAnd?: Maybe<(Maybe<string>)[]>;
    /** Array of tag slugs, used to exclude objects in specified tags */
    tagSlugIn?: Maybe<(Maybe<string>)[]>;

    taxQuery?: Maybe<RootQueryToRevisionConnectionWhereArgsTaxQuery>;
    /** Title of the object */
    title?: Maybe<string>;
}
/** Query objects based on taxonomy parameters */
export interface RootQueryToRevisionConnectionWhereArgsTaxQuery {
    relation?: Maybe<RelationEnum>;

    taxArray?: Maybe<(Maybe<RootQueryToRevisionConnectionWhereArgsTaxArray>)[]>;
}

export interface RootQueryToRevisionConnectionWhereArgsTaxArray {
    taxonomy?: Maybe<TaxonomyEnum>;

    field?: Maybe<RootQueryToRevisionConnectionWhereArgsTaxQueryField>;
    /** A list of term slugs */
    terms?: Maybe<(Maybe<string>)[]>;
    /** Whether or not to include children for hierarchical  taxonomies. Defaults to false to improve performance (note that this is opposite of the default for WP_Query). */
    includeChildren?: Maybe<boolean>;

    operator?: Maybe<RootQueryToRevisionConnectionWhereArgsTaxQueryOperator>;
}
/** Arguments for filtering the RootQueryToTagConnection connection */
export interface RootQueryToTagConnectionWhereArgs {
    /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
    cacheDomain?: Maybe<string>;
    /** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
    childless?: Maybe<boolean>;
    /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
    childOf?: Maybe<number>;
    /** Retrieve terms where the description is LIKE the input value. Default empty. */
    descriptionLike?: Maybe<string>;
    /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
    exclude?: Maybe<(Maybe<string>)[]>;
    /** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
    excludeTree?: Maybe<(Maybe<string>)[]>;
    /** Whether to hide terms not assigned to any posts. Accepts true or false. Default true */
    hideEmpty?: Maybe<boolean>;
    /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
    hierarchical?: Maybe<boolean>;
    /** Array of term ids to include. Default empty array. */
    include?: Maybe<(Maybe<string>)[]>;
    /** Array of names to return term(s) for. Default empty. */
    name?: Maybe<(Maybe<string>)[]>;
    /** Retrieve terms where the name is LIKE the input value. Default empty. */
    nameLike?: Maybe<string>;
    /** Array of object IDs. Results will be limited to terms associated with these objects. */
    objectIds?: Maybe<(Maybe<string>)[]>;
    /** Field(s) to order terms by. Defaults to 'name'. */
    orderby?: Maybe<TermObjectsConnectionOrderbyEnum>;
    /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
    padCounts?: Maybe<boolean>;
    /** Parent term ID to retrieve direct-child terms of. Default empty. */
    parent?: Maybe<number>;
    /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
    search?: Maybe<string>;
    /** Default false. If true, only the items connected to the source item will be returned. If false, all items will be returned regardless of connection to the source */
    shouldOnlyIncludeConnectedItems?: Maybe<boolean>;
    /** Default false. If true, the connection will be output in a flat list instead of the hierarchical list. So child terms will be output in the same level as the parent terms */
    shouldOutputInFlatList?: Maybe<boolean>;
    /** Array of slugs to return term(s) for. Default empty. */
    slug?: Maybe<(Maybe<string>)[]>;
    /** Array of term taxonomy IDs, to match when querying terms. */
    termTaxonomId?: Maybe<(Maybe<string>)[]>;
    /** Whether to prime meta caches for matched terms. Default true. */
    updateTermMetaCache?: Maybe<boolean>;
}
/** Arguments for filtering the RootQueryToUserConnection connection */
export interface RootQueryToUserConnectionWhereArgs {
    /** Array of IDs of users whose unapproved comments will be returned by the query regardless of status. */
    exclude?: Maybe<(Maybe<number>)[]>;
    /** Pass an array of post types to filter results to users who have published posts in those post types. */
    hasPublishedPosts?: Maybe<(Maybe<PostTypeEnum>)[]>;
    /** Array of comment IDs to include. */
    include?: Maybe<(Maybe<number>)[]>;
    /** The user login. */
    login?: Maybe<string>;
    /** An array of logins to include. Users matching one of these logins will be included in results. */
    loginIn?: Maybe<number>;
    /** An array of logins to exclude. Users matching one of these logins will not be included in results. */
    loginNotIn?: Maybe<number>;
    /** The user nicename. */
    nicename?: Maybe<string>;
    /** An array of nicenames to include. Users matching one of these nicenames will be included in results. */
    nicenameIn?: Maybe<(Maybe<string>)[]>;
    /** An array of nicenames to exclude. Users matching one of these nicenames will not be included in results. */
    nicenameNotIn?: Maybe<(Maybe<string>)[]>;
    /** An array of role names that users must match to be included in results. Note that this is an inclusive list: users must match *each* role. */
    role?: Maybe<UserRoleEnum>;
    /** An array of role names. Matched users must have at least one of these roles. */
    roleIn?: Maybe<(Maybe<UserRoleEnum>)[]>;
    /** An array of role names to exclude. Users matching one or more of these roles will not be included in results. */
    roleNotIn?: Maybe<(Maybe<UserRoleEnum>)[]>;
    /** Search keyword. Searches for possible string matches on columns. When "searchColumns" is left empty, it tries to determine which column to search in based on search string. */
    search?: Maybe<string>;
    /** Array of column names to be searched. Accepts 'ID', 'login', 'nicename', 'email', 'url'. */
    searchColumns?: Maybe<(Maybe<UsersConnectionSearchColumnEnum>)[]>;
}
/** Input for the UpdateCategory mutation */
export interface UpdateCategoryInput {
    /** The slug that the category will be an alias of */
    aliasOf?: Maybe<string>;

    clientMutationId: string;
    /** The description of the category object */
    description?: Maybe<string>;
    /** The ID of the category object to update */
    id: string;
    /** The name of the category object to mutate */
    name?: Maybe<string>;
    /** The ID of the category that should be set as the parent */
    parentId?: Maybe<string>;
    /** If this argument exists then the slug will be checked to see if it is not an existing valid term. If that check succeeds (it is not a valid term), then it is added and the term id is given. If it fails, then a check is made to whether the taxonomy is hierarchical and the parent argument is not empty. If the second check succeeds, the term will be inserted and the term id will be given. If the slug argument is empty, then it will be calculated from the term name. */
    slug?: Maybe<string>;
}
/** Input for the UpdateTag mutation */
export interface UpdateTagInput {
    /** The slug that the post_tag will be an alias of */
    aliasOf?: Maybe<string>;

    clientMutationId: string;
    /** The description of the post_tag object */
    description?: Maybe<string>;
    /** The ID of the tag object to update */
    id: string;
    /** The name of the post_tag object to mutate */
    name?: Maybe<string>;
    /** If this argument exists then the slug will be checked to see if it is not an existing valid term. If that check succeeds (it is not a valid term), then it is added and the term id is given. If it fails, then a check is made to whether the taxonomy is hierarchical and the parent argument is not empty. If the second check succeeds, the term will be inserted and the term id will be given. If the slug argument is empty, then it will be calculated from the term name. */
    slug?: Maybe<string>;
}
/** Input for the createCategory mutation */
export interface CreateCategoryInput {
    /** The slug that the category will be an alias of */
    aliasOf?: Maybe<string>;

    clientMutationId: string;
    /** The description of the category object */
    description?: Maybe<string>;
    /** The name of the category object to mutate */
    name: string;
    /** The ID of the category that should be set as the parent */
    parentId?: Maybe<string>;
    /** If this argument exists then the slug will be checked to see if it is not an existing valid term. If that check succeeds (it is not a valid term), then it is added and the term id is given. If it fails, then a check is made to whether the taxonomy is hierarchical and the parent argument is not empty. If the second check succeeds, the term will be inserted and the term id will be given. If the slug argument is empty, then it will be calculated from the term name. */
    slug?: Maybe<string>;
}
/** Input for the createComment mutation */
export interface CreateCommentInput {
    /** User agent used to post the comment. */
    agent?: Maybe<string>;
    /** The approval status of the comment. */
    approved?: Maybe<string>;
    /** The name of the comment's author. */
    author?: Maybe<string>;
    /** The email of the comment's author. */
    authorEmail?: Maybe<string>;
    /** IP address for the comment's author. */
    authorIp?: Maybe<string>;
    /** The url of the comment's author. */
    authorUrl?: Maybe<string>;

    clientMutationId: string;
    /** Content of the comment. */
    content?: Maybe<string>;
    /** The date of the object. Preferable to enter as year/month/day ( e.g. 01/31/2017 ) as it will rearrange date as fit if it is not specified. Incomplete dates may have unintended results for example, "2017" as the input will use current date with timestamp 20:17 */
    date?: Maybe<string>;
    /** Parent comment of current comment. */
    parent?: Maybe<string>;
    /** The ID of the post the comment belongs to. */
    postId?: Maybe<number>;
    /** Type of comment. */
    type?: Maybe<string>;
    /** The userID of the comment's author. */
    userId?: Maybe<number>;
}
/** Input for the createDemo mutation */
export interface CreateDemoInput {
    /** The userId to assign as the author of the post */
    authorId?: Maybe<string>;

    clientMutationId: string;
    /** The number of comments. Even though WPGraphQL denotes this field as an integer, in WordPress this field should be saved as a numeric string for compatibility. */
    commentCount?: Maybe<number>;
    /** The comment status for the object */
    commentStatus?: Maybe<string>;
    /** The content of the object */
    content?: Maybe<string>;
    /** The date of the object. Preferable to enter as year/month/day (e.g. 01/31/2017) as it will rearrange date as fit if it is not specified. Incomplete dates may have unintended results for example, "2017" as the input will use current date with timestamp 20:17 */
    date?: Maybe<string>;
    /** The excerpt of the object */
    excerpt?: Maybe<string>;
    /** A field used for ordering posts. This is typically used with nav menu items or for special ordering of hierarchical content types. */
    menuOrder?: Maybe<number>;
    /** If the post is an attachment or a media file, this field will carry the corresponding MIME type. This field is equivalent to the value of WP_Post->post_mime_type and the post_mime_type column in the "post_objects" database table. */
    mimeType?: Maybe<MimeTypeEnum>;
    /** The ID of the parent object */
    parentId?: Maybe<string>;
    /** The password used to protect the content of the object */
    password?: Maybe<string>;
    /** URLs that have been pinged. */
    pinged?: Maybe<(Maybe<string>)[]>;
    /** The ping status for the object */
    pingStatus?: Maybe<string>;
    /** The slug of the object */
    slug?: Maybe<string>;
    /** The status of the object */
    status?: Maybe<PostStatusEnum>;
    /** The title of the post */
    title?: Maybe<string>;
    /** URLs queued to be pinged. */
    toPing?: Maybe<(Maybe<string>)[]>;
}
/** Input for the createMediaItem mutation */
export interface CreateMediaItemInput {
    /** Alternative text to display when mediaItem is not displayed */
    altText?: Maybe<string>;
    /** The userId to assign as the author of the mediaItem */
    authorId?: Maybe<string>;
    /** The caption for the mediaItem */
    caption?: Maybe<string>;

    clientMutationId: string;
    /** The comment status for the mediaItem */
    commentStatus?: Maybe<string>;
    /** The date of the mediaItem */
    date?: Maybe<string>;
    /** The date (in GMT zone) of the mediaItem */
    dateGmt?: Maybe<string>;
    /** Description of the mediaItem */
    description?: Maybe<string>;
    /** The file name of the mediaItem */
    filePath?: Maybe<string>;
    /** The file type of the mediaItem */
    fileType?: Maybe<MimeTypeEnum>;
    /** The WordPress post ID or the graphQL postId of the parent object */
    parentId?: Maybe<string>;
    /** The ping status for the mediaItem */
    pingStatus?: Maybe<string>;
    /** The slug of the mediaItem */
    slug?: Maybe<string>;
    /** The status of the mediaItem */
    status?: Maybe<MediaItemStatusEnum>;
    /** The title of the mediaItem */
    title?: Maybe<string>;
}
/** Input for the createPage mutation */
export interface CreatePageInput {
    /** The userId to assign as the author of the post */
    authorId?: Maybe<string>;

    clientMutationId: string;
    /** The number of comments. Even though WPGraphQL denotes this field as an integer, in WordPress this field should be saved as a numeric string for compatibility. */
    commentCount?: Maybe<number>;
    /** The comment status for the object */
    commentStatus?: Maybe<string>;
    /** The content of the object */
    content?: Maybe<string>;
    /** The date of the object. Preferable to enter as year/month/day (e.g. 01/31/2017) as it will rearrange date as fit if it is not specified. Incomplete dates may have unintended results for example, "2017" as the input will use current date with timestamp 20:17 */
    date?: Maybe<string>;
    /** The excerpt of the object */
    excerpt?: Maybe<string>;
    /** A field used for ordering posts. This is typically used with nav menu items or for special ordering of hierarchical content types. */
    menuOrder?: Maybe<number>;
    /** If the post is an attachment or a media file, this field will carry the corresponding MIME type. This field is equivalent to the value of WP_Post->post_mime_type and the post_mime_type column in the "post_objects" database table. */
    mimeType?: Maybe<MimeTypeEnum>;
    /** The ID of the parent object */
    parentId?: Maybe<string>;
    /** The password used to protect the content of the object */
    password?: Maybe<string>;
    /** URLs that have been pinged. */
    pinged?: Maybe<(Maybe<string>)[]>;
    /** The ping status for the object */
    pingStatus?: Maybe<string>;
    /** The slug of the object */
    slug?: Maybe<string>;
    /** The status of the object */
    status?: Maybe<PostStatusEnum>;
    /** The title of the post */
    title?: Maybe<string>;
    /** URLs queued to be pinged. */
    toPing?: Maybe<(Maybe<string>)[]>;
}
/** Input for the createPost mutation */
export interface CreatePostInput {
    /** The userId to assign as the author of the post */
    authorId?: Maybe<string>;
    /** Set connections between the post and categories */
    categories?: Maybe<PostCategoriesInput>;

    clientMutationId: string;
    /** The number of comments. Even though WPGraphQL denotes this field as an integer, in WordPress this field should be saved as a numeric string for compatibility. */
    commentCount?: Maybe<number>;
    /** The comment status for the object */
    commentStatus?: Maybe<string>;
    /** The content of the object */
    content?: Maybe<string>;
    /** The date of the object. Preferable to enter as year/month/day (e.g. 01/31/2017) as it will rearrange date as fit if it is not specified. Incomplete dates may have unintended results for example, "2017" as the input will use current date with timestamp 20:17 */
    date?: Maybe<string>;
    /** The excerpt of the object */
    excerpt?: Maybe<string>;
    /** A field used for ordering posts. This is typically used with nav menu items or for special ordering of hierarchical content types. */
    menuOrder?: Maybe<number>;
    /** If the post is an attachment or a media file, this field will carry the corresponding MIME type. This field is equivalent to the value of WP_Post->post_mime_type and the post_mime_type column in the "post_objects" database table. */
    mimeType?: Maybe<MimeTypeEnum>;
    /** The ID of the parent object */
    parentId?: Maybe<string>;
    /** The password used to protect the content of the object */
    password?: Maybe<string>;
    /** URLs that have been pinged. */
    pinged?: Maybe<(Maybe<string>)[]>;
    /** The ping status for the object */
    pingStatus?: Maybe<string>;
    /** The slug of the object */
    slug?: Maybe<string>;
    /** The status of the object */
    status?: Maybe<PostStatusEnum>;
    /** Set connections between the post and tags */
    tags?: Maybe<PostTagsInput>;
    /** The title of the post */
    title?: Maybe<string>;
    /** URLs queued to be pinged. */
    toPing?: Maybe<(Maybe<string>)[]>;
}
/** Set relationships between the post to categories */
export interface PostCategoriesInput {
    /** If true, this will append the category to existing related categories. If false, this will replace existing relationships. Default true. */
    append?: Maybe<boolean>;

    nodes?: Maybe<(Maybe<PostCategoriesNodeInput>)[]>;
}
/** List of categories to connect the post to. If an ID is set, it will be used to create the connection. If not, it will look for a slug. If neither are valid existing terms, and the site is configured to allow terms to be created during post mutations, a term will be created using the Name if it exists in the input, then fallback to the slug if it exists. */
export interface PostCategoriesNodeInput {
    /** The description of the category. This field is used to set a description of the category if a new one is created during the mutation. */
    description?: Maybe<string>;
    /** The ID of the category. If present, this will be used to connect to the post. If no existing category exists with this ID, no connection will be made. */
    id?: Maybe<string>;
    /** The name of the category. This field is used to create a new term, if term creation is enabled in nested mutations, and if one does not already exist with the provided slug or ID or if a slug or ID is not provided. If no name is included and a term is created, the creation will fallback to the slug field. */
    name?: Maybe<string>;
    /** The slug of the category. If no ID is present, this field will be used to make a connection. If no existing term exists with this slug, this field will be used as a fallback to the Name field when creating a new term to connect to, if term creation is enabled as a nested mutation. */
    slug?: Maybe<string>;
}
/** Set relationships between the post to tags */
export interface PostTagsInput {
    /** If true, this will append the tag to existing related tags. If false, this will replace existing relationships. Default true. */
    append?: Maybe<boolean>;

    nodes?: Maybe<(Maybe<PostTagsNodeInput>)[]>;
}
/** List of tags to connect the post to. If an ID is set, it will be used to create the connection. If not, it will look for a slug. If neither are valid existing terms, and the site is configured to allow terms to be created during post mutations, a term will be created using the Name if it exists in the input, then fallback to the slug if it exists. */
export interface PostTagsNodeInput {
    /** The description of the tag. This field is used to set a description of the tag if a new one is created during the mutation. */
    description?: Maybe<string>;
    /** The ID of the tag. If present, this will be used to connect to the post. If no existing tag exists with this ID, no connection will be made. */
    id?: Maybe<string>;
    /** The name of the tag. This field is used to create a new term, if term creation is enabled in nested mutations, and if one does not already exist with the provided slug or ID or if a slug or ID is not provided. If no name is included and a term is created, the creation will fallback to the slug field. */
    name?: Maybe<string>;
    /** The slug of the tag. If no ID is present, this field will be used to make a connection. If no existing term exists with this slug, this field will be used as a fallback to the Name field when creating a new term to connect to, if term creation is enabled as a nested mutation. */
    slug?: Maybe<string>;
}
/** Input for the createTag mutation */
export interface CreateTagInput {
    /** The slug that the post_tag will be an alias of */
    aliasOf?: Maybe<string>;

    clientMutationId: string;
    /** The description of the post_tag object */
    description?: Maybe<string>;
    /** The name of the post_tag object to mutate */
    name: string;
    /** If this argument exists then the slug will be checked to see if it is not an existing valid term. If that check succeeds (it is not a valid term), then it is added and the term id is given. If it fails, then a check is made to whether the taxonomy is hierarchical and the parent argument is not empty. If the second check succeeds, the term will be inserted and the term id will be given. If the slug argument is empty, then it will be calculated from the term name. */
    slug?: Maybe<string>;
}
/** Input for the createUser mutation */
export interface CreateUserInput {
    /** User's AOL IM account. */
    aim?: Maybe<string>;

    clientMutationId: string;
    /** A string containing content about the user. */
    description?: Maybe<string>;
    /** A string that will be shown on the site. Defaults to user's username. It is likely that you will want to change this, for both appearance and security through obscurity (that is if you dont use and delete the default admin user). */
    displayName?: Maybe<string>;
    /** A string containing the user's email address. */
    email?: Maybe<string>;
    /** The user's first name. */
    firstName?: Maybe<string>;
    /** User's Jabber account. */
    jabber?: Maybe<string>;
    /** The user's last name. */
    lastName?: Maybe<string>;
    /** User's locale. */
    locale?: Maybe<string>;
    /** A string that contains a URL-friendly name for the user. The default is the user's username. */
    nicename?: Maybe<string>;
    /** The user's nickname, defaults to the user's username. */
    nickname?: Maybe<string>;
    /** A string that contains the plain text password for the user. */
    password?: Maybe<string>;
    /** The date the user registered. Format is Y-m-d H:i:s. */
    registered?: Maybe<string>;
    /** A string for whether to enable the rich editor or not. False if not empty. */
    richEditing?: Maybe<string>;
    /** An array of roles to be assigned to the user. */
    roles?: Maybe<(Maybe<string>)[]>;
    /** A string that contains the user's username for logging in. */
    username: string;
    /** A string containing the user's URL for the user's web site. */
    websiteUrl?: Maybe<string>;
    /** User's Yahoo IM account. */
    yim?: Maybe<string>;
}
/** Input for the deleteCategory mutation */
export interface DeleteCategoryInput {
    clientMutationId: string;
    /** The ID of the category to delete */
    id: string;
}
/** Input for the deleteComment mutation */
export interface DeleteCommentInput {
    clientMutationId: string;
    /** Whether the comment should be force deleted instead of being moved to the trash */
    forceDelete?: Maybe<boolean>;
    /** The deleted comment ID */
    id: string;
}
/** Input for the deleteDemo mutation */
export interface DeleteDemoInput {
    clientMutationId: string;
    /** Whether the object should be force deleted instead of being moved to the trash */
    forceDelete?: Maybe<boolean>;
    /** The ID of the demo to delete */
    id: string;
}
/** Input for the deleteMediaItem mutation */
export interface DeleteMediaItemInput {
    clientMutationId: string;
    /** Whether the mediaItem should be force deleted instead of being moved to the trash */
    forceDelete?: Maybe<boolean>;
    /** The ID of the mediaItem to delete */
    id: string;
}
/** Input for the deletePage mutation */
export interface DeletePageInput {
    clientMutationId: string;
    /** Whether the object should be force deleted instead of being moved to the trash */
    forceDelete?: Maybe<boolean>;
    /** The ID of the page to delete */
    id: string;
}
/** Input for the deletePost mutation */
export interface DeletePostInput {
    clientMutationId: string;
    /** Whether the object should be force deleted instead of being moved to the trash */
    forceDelete?: Maybe<boolean>;
    /** The ID of the post to delete */
    id: string;
}
/** Input for the deleteRevision mutation */
export interface DeleteRevisionInput {
    clientMutationId: string;
    /** Whether the object should be force deleted instead of being moved to the trash */
    forceDelete?: Maybe<boolean>;
    /** The ID of the revision to delete */
    id: string;
}
/** Input for the deleteTag mutation */
export interface DeleteTagInput {
    clientMutationId: string;
    /** The ID of the tag to delete */
    id: string;
}
/** Input for the deleteUser mutation */
export interface DeleteUserInput {
    clientMutationId: string;
    /** The ID of the user you want to delete */
    id: string;
    /** Reassign posts and links to new User ID. */
    reassignId?: Maybe<string>;
}
/** Input for the registerUser mutation */
export interface RegisterUserInput {
    /** User's AOL IM account. */
    aim?: Maybe<string>;

    clientMutationId: string;
    /** A string containing content about the user. */
    description?: Maybe<string>;
    /** A string that will be shown on the site. Defaults to user's username. It is likely that you will want to change this, for both appearance and security through obscurity (that is if you dont use and delete the default admin user). */
    displayName?: Maybe<string>;
    /** A string containing the user's email address. */
    email?: Maybe<string>;
    /** The user's first name. */
    firstName?: Maybe<string>;
    /** User's Jabber account. */
    jabber?: Maybe<string>;
    /** The user's last name. */
    lastName?: Maybe<string>;
    /** User's locale. */
    locale?: Maybe<string>;
    /** A string that contains a URL-friendly name for the user. The default is the user's username. */
    nicename?: Maybe<string>;
    /** The user's nickname, defaults to the user's username. */
    nickname?: Maybe<string>;
    /** A string that contains the plain text password for the user. */
    password?: Maybe<string>;
    /** The date the user registered. Format is Y-m-d H:i:s. */
    registered?: Maybe<string>;
    /** A string for whether to enable the rich editor or not. False if not empty. */
    richEditing?: Maybe<string>;
    /** An array of roles to be assigned to the user. */
    roles?: Maybe<(Maybe<string>)[]>;
    /** A string that contains the user's username. */
    username: string;
    /** A string containing the user's URL for the user's web site. */
    websiteUrl?: Maybe<string>;
    /** User's Yahoo IM account. */
    yim?: Maybe<string>;
}
/** Input for the resetUserPassword mutation */
export interface ResetUserPasswordInput {
    clientMutationId: string;
    /** Password reset key */
    key?: Maybe<string>;
    /** The user's login (username). */
    login?: Maybe<string>;
    /** The new password. */
    password?: Maybe<string>;
}
/** Input for the restoreComment mutation */
export interface RestoreCommentInput {
    clientMutationId: string;
    /** The ID of the comment to be restored */
    id: string;
}
/** Input for the sendPasswordResetEmail mutation */
export interface SendPasswordResetEmailInput {
    clientMutationId: string;
    /** A string that contains the user's username or email address. */
    username: string;
}
/** Input for the updateComment mutation */
export interface UpdateCommentInput {
    /** User agent used to post the comment. */
    agent?: Maybe<string>;
    /** The approval status of the comment. */
    approved?: Maybe<string>;
    /** The name of the comment's author. */
    author?: Maybe<string>;
    /** The email of the comment's author. */
    authorEmail?: Maybe<string>;
    /** IP address for the comment's author. */
    authorIp?: Maybe<string>;
    /** The url of the comment's author. */
    authorUrl?: Maybe<string>;

    clientMutationId: string;
    /** Content of the comment. */
    content?: Maybe<string>;
    /** The date of the object. Preferable to enter as year/month/day ( e.g. 01/31/2017 ) as it will rearrange date as fit if it is not specified. Incomplete dates may have unintended results for example, "2017" as the input will use current date with timestamp 20:17 */
    date?: Maybe<string>;
    /** The ID of the comment being updated. */
    id: string;
    /** Parent comment of current comment. */
    parent?: Maybe<string>;
    /** The ID of the post the comment belongs to. */
    postId?: Maybe<number>;
    /** Type of comment. */
    type?: Maybe<string>;
    /** The userID of the comment's author. */
    userId?: Maybe<number>;
}
/** Input for the updateDemo mutation */
export interface UpdateDemoInput {
    /** The userId to assign as the author of the post */
    authorId?: Maybe<string>;

    clientMutationId: string;
    /** The number of comments. Even though WPGraphQL denotes this field as an integer, in WordPress this field should be saved as a numeric string for compatibility. */
    commentCount?: Maybe<number>;
    /** The comment status for the object */
    commentStatus?: Maybe<string>;
    /** The content of the object */
    content?: Maybe<string>;
    /** The date of the object. Preferable to enter as year/month/day (e.g. 01/31/2017) as it will rearrange date as fit if it is not specified. Incomplete dates may have unintended results for example, "2017" as the input will use current date with timestamp 20:17 */
    date?: Maybe<string>;
    /** The excerpt of the object */
    excerpt?: Maybe<string>;
    /** The ID of the demo object */
    id: string;
    /** A field used for ordering posts. This is typically used with nav menu items or for special ordering of hierarchical content types. */
    menuOrder?: Maybe<number>;
    /** If the post is an attachment or a media file, this field will carry the corresponding MIME type. This field is equivalent to the value of WP_Post->post_mime_type and the post_mime_type column in the "post_objects" database table. */
    mimeType?: Maybe<MimeTypeEnum>;
    /** The ID of the parent object */
    parentId?: Maybe<string>;
    /** The password used to protect the content of the object */
    password?: Maybe<string>;
    /** URLs that have been pinged. */
    pinged?: Maybe<(Maybe<string>)[]>;
    /** The ping status for the object */
    pingStatus?: Maybe<string>;
    /** The slug of the object */
    slug?: Maybe<string>;
    /** The status of the object */
    status?: Maybe<PostStatusEnum>;
    /** The title of the post */
    title?: Maybe<string>;
    /** URLs queued to be pinged. */
    toPing?: Maybe<(Maybe<string>)[]>;
}
/** Input for the updateMediaItem mutation */
export interface UpdateMediaItemInput {
    /** Alternative text to display when mediaItem is not displayed */
    altText?: Maybe<string>;
    /** The userId to assign as the author of the mediaItem */
    authorId?: Maybe<string>;
    /** The caption for the mediaItem */
    caption?: Maybe<string>;

    clientMutationId: string;
    /** The comment status for the mediaItem */
    commentStatus?: Maybe<string>;
    /** The date of the mediaItem */
    date?: Maybe<string>;
    /** The date (in GMT zone) of the mediaItem */
    dateGmt?: Maybe<string>;
    /** Description of the mediaItem */
    description?: Maybe<string>;
    /** The file name of the mediaItem */
    filePath?: Maybe<string>;
    /** The file type of the mediaItem */
    fileType?: Maybe<MimeTypeEnum>;
    /** The ID of the mediaItem object */
    id: string;
    /** The WordPress post ID or the graphQL postId of the parent object */
    parentId?: Maybe<string>;
    /** The ping status for the mediaItem */
    pingStatus?: Maybe<string>;
    /** The slug of the mediaItem */
    slug?: Maybe<string>;
    /** The status of the mediaItem */
    status?: Maybe<MediaItemStatusEnum>;
    /** The title of the mediaItem */
    title?: Maybe<string>;
}
/** Input for the updatePage mutation */
export interface UpdatePageInput {
    /** The userId to assign as the author of the post */
    authorId?: Maybe<string>;

    clientMutationId: string;
    /** The number of comments. Even though WPGraphQL denotes this field as an integer, in WordPress this field should be saved as a numeric string for compatibility. */
    commentCount?: Maybe<number>;
    /** The comment status for the object */
    commentStatus?: Maybe<string>;
    /** The content of the object */
    content?: Maybe<string>;
    /** The date of the object. Preferable to enter as year/month/day (e.g. 01/31/2017) as it will rearrange date as fit if it is not specified. Incomplete dates may have unintended results for example, "2017" as the input will use current date with timestamp 20:17 */
    date?: Maybe<string>;
    /** The excerpt of the object */
    excerpt?: Maybe<string>;
    /** The ID of the page object */
    id: string;
    /** A field used for ordering posts. This is typically used with nav menu items or for special ordering of hierarchical content types. */
    menuOrder?: Maybe<number>;
    /** If the post is an attachment or a media file, this field will carry the corresponding MIME type. This field is equivalent to the value of WP_Post->post_mime_type and the post_mime_type column in the "post_objects" database table. */
    mimeType?: Maybe<MimeTypeEnum>;
    /** The ID of the parent object */
    parentId?: Maybe<string>;
    /** The password used to protect the content of the object */
    password?: Maybe<string>;
    /** URLs that have been pinged. */
    pinged?: Maybe<(Maybe<string>)[]>;
    /** The ping status for the object */
    pingStatus?: Maybe<string>;
    /** The slug of the object */
    slug?: Maybe<string>;
    /** The status of the object */
    status?: Maybe<PostStatusEnum>;
    /** The title of the post */
    title?: Maybe<string>;
    /** URLs queued to be pinged. */
    toPing?: Maybe<(Maybe<string>)[]>;
}
/** Input for the updatePost mutation */
export interface UpdatePostInput {
    /** The userId to assign as the author of the post */
    authorId?: Maybe<string>;
    /** Set connections between the post and categories */
    categories?: Maybe<PostCategoriesInput>;

    clientMutationId: string;
    /** The number of comments. Even though WPGraphQL denotes this field as an integer, in WordPress this field should be saved as a numeric string for compatibility. */
    commentCount?: Maybe<number>;
    /** The comment status for the object */
    commentStatus?: Maybe<string>;
    /** The content of the object */
    content?: Maybe<string>;
    /** The date of the object. Preferable to enter as year/month/day (e.g. 01/31/2017) as it will rearrange date as fit if it is not specified. Incomplete dates may have unintended results for example, "2017" as the input will use current date with timestamp 20:17 */
    date?: Maybe<string>;
    /** The excerpt of the object */
    excerpt?: Maybe<string>;
    /** The ID of the post object */
    id: string;
    /** A field used for ordering posts. This is typically used with nav menu items or for special ordering of hierarchical content types. */
    menuOrder?: Maybe<number>;
    /** If the post is an attachment or a media file, this field will carry the corresponding MIME type. This field is equivalent to the value of WP_Post->post_mime_type and the post_mime_type column in the "post_objects" database table. */
    mimeType?: Maybe<MimeTypeEnum>;
    /** The ID of the parent object */
    parentId?: Maybe<string>;
    /** The password used to protect the content of the object */
    password?: Maybe<string>;
    /** URLs that have been pinged. */
    pinged?: Maybe<(Maybe<string>)[]>;
    /** The ping status for the object */
    pingStatus?: Maybe<string>;
    /** The slug of the object */
    slug?: Maybe<string>;
    /** The status of the object */
    status?: Maybe<PostStatusEnum>;
    /** Set connections between the post and tags */
    tags?: Maybe<PostTagsInput>;
    /** The title of the post */
    title?: Maybe<string>;
    /** URLs queued to be pinged. */
    toPing?: Maybe<(Maybe<string>)[]>;
}
/** Input for the updateSettings mutation */
export interface UpdateSettingsInput {
    clientMutationId: string;
    /** Allow people to post comments on new articles. */
    discussionSettingsDefaultCommentStatus?: Maybe<string>;
    /** Allow link notifications from other blogs (pingbacks and trackbacks) on new articles. */
    discussionSettingsDefaultPingStatus?: Maybe<string>;
    /** A date format for all date strings. */
    generalSettingsDateFormat?: Maybe<string>;
    /** Site tagline. */
    generalSettingsDescription?: Maybe<string>;
    /** This address is used for admin purposes, like new user notification. */
    generalSettingsEmail?: Maybe<string>;
    /** WordPress locale code. */
    generalSettingsLanguage?: Maybe<string>;
    /** A day number of the week that the week should start on. */
    generalSettingsStartOfWeek?: Maybe<number>;
    /** A time format for all time strings. */
    generalSettingsTimeFormat?: Maybe<string>;
    /** A city in the same timezone as you. */
    generalSettingsTimezone?: Maybe<string>;
    /** Site title. */
    generalSettingsTitle?: Maybe<string>;
    /** Site URL. */
    generalSettingsUrl?: Maybe<string>;
    /** Blog pages show at most. */
    readingSettingsPostsPerPage?: Maybe<number>;
    /** Default post category. */
    writingSettingsDefaultCategory?: Maybe<number>;
    /** Default post format. */
    writingSettingsDefaultPostFormat?: Maybe<string>;
    /** Convert emoticons like :-) and :-P to graphics on display. */
    writingSettingsUseSmilies?: Maybe<boolean>;
}
/** Input for the updateUser mutation */
export interface UpdateUserInput {
    /** User's AOL IM account. */
    aim?: Maybe<string>;

    clientMutationId: string;
    /** A string containing content about the user. */
    description?: Maybe<string>;
    /** A string that will be shown on the site. Defaults to user's username. It is likely that you will want to change this, for both appearance and security through obscurity (that is if you dont use and delete the default admin user). */
    displayName?: Maybe<string>;
    /** A string containing the user's email address. */
    email?: Maybe<string>;
    /** The user's first name. */
    firstName?: Maybe<string>;
    /** The ID of the user */
    id: string;
    /** User's Jabber account. */
    jabber?: Maybe<string>;
    /** The user's last name. */
    lastName?: Maybe<string>;
    /** User's locale. */
    locale?: Maybe<string>;
    /** A string that contains a URL-friendly name for the user. The default is the user's username. */
    nicename?: Maybe<string>;
    /** The user's nickname, defaults to the user's username. */
    nickname?: Maybe<string>;
    /** A string that contains the plain text password for the user. */
    password?: Maybe<string>;
    /** The date the user registered. Format is Y-m-d H:i:s. */
    registered?: Maybe<string>;
    /** A string for whether to enable the rich editor or not. False if not empty. */
    richEditing?: Maybe<string>;
    /** An array of roles to be assigned to the user. */
    roles?: Maybe<(Maybe<string>)[]>;
    /** A string containing the user's URL for the user's web site. */
    websiteUrl?: Maybe<string>;
    /** User's Yahoo IM account. */
    yim?: Maybe<string>;
}
/** Options for ordering the connection by */
export enum TermObjectsConnectionOrderbyEnum {
    Count = "COUNT",
    Description = "DESCRIPTION",
    Name = "NAME",
    Slug = "SLUG",
    TermGroup = "TERM_GROUP",
    TermId = "TERM_ID",
    TermOrder = "TERM_ORDER",
}
/** Allowed Post Types */
export enum PostTypeEnum {
    Attachment = "ATTACHMENT",
    Demo = "DEMO",
    Page = "PAGE",
    Post = "POST",
    Revision = "REVISION",
}
/** Allowed taxonomies */
export enum TaxonomyEnum {
    Category = "CATEGORY",
    Tag = "TAG",
}
/** The column to use when filtering by date */
export enum PostObjectsConnectionDateColumnEnum {
    Date = "DATE",
    Modified = "MODIFIED",
}
/** The logical relation between each item in the array when there are more than one. */
export enum RelationEnum {
    And = "AND",
    Or = "OR",
}
/** The MimeType of the object */
export enum MimeTypeEnum {
    ApplicationJava = "APPLICATION_JAVA",
    ApplicationMsword = "APPLICATION_MSWORD",
    ApplicationOctetStream = "APPLICATION_OCTET_STREAM",
    ApplicationOnenote = "APPLICATION_ONENOTE",
    ApplicationOxps = "APPLICATION_OXPS",
    ApplicationPdf = "APPLICATION_PDF",
    ApplicationRar = "APPLICATION_RAR",
    ApplicationRtf = "APPLICATION_RTF",
    ApplicationTtafXml = "APPLICATION_TTAF_XML",
    ApplicationVndAppleKeynote = "APPLICATION_VND_APPLE_KEYNOTE",
    ApplicationVndAppleNumbers = "APPLICATION_VND_APPLE_NUMBERS",
    ApplicationVndApplePages = "APPLICATION_VND_APPLE_PAGES",
    ApplicationVndMsAccess = "APPLICATION_VND_MS_ACCESS",
    ApplicationVndMsExcel = "APPLICATION_VND_MS_EXCEL",
    ApplicationVndMsExcelAddinMacroenabled_12 = "APPLICATION_VND_MS_EXCEL_ADDIN_MACROENABLED_12",
    ApplicationVndMsExcelSheetBinaryMacroenabled_12 = "APPLICATION_VND_MS_EXCEL_SHEET_BINARY_MACROENABLED_12",
    ApplicationVndMsExcelSheetMacroenabled_12 = "APPLICATION_VND_MS_EXCEL_SHEET_MACROENABLED_12",
    ApplicationVndMsExcelTemplateMacroenabled_12 = "APPLICATION_VND_MS_EXCEL_TEMPLATE_MACROENABLED_12",
    ApplicationVndMsPowerpoint = "APPLICATION_VND_MS_POWERPOINT",
    ApplicationVndMsPowerpointAddinMacroenabled_12 = "APPLICATION_VND_MS_POWERPOINT_ADDIN_MACROENABLED_12",
    ApplicationVndMsPowerpointPresentationMacroenabled_12 = "APPLICATION_VND_MS_POWERPOINT_PRESENTATION_MACROENABLED_12",
    ApplicationVndMsPowerpointSlideshowMacroenabled_12 = "APPLICATION_VND_MS_POWERPOINT_SLIDESHOW_MACROENABLED_12",
    ApplicationVndMsPowerpointSlideMacroenabled_12 = "APPLICATION_VND_MS_POWERPOINT_SLIDE_MACROENABLED_12",
    ApplicationVndMsPowerpointTemplateMacroenabled_12 = "APPLICATION_VND_MS_POWERPOINT_TEMPLATE_MACROENABLED_12",
    ApplicationVndMsProject = "APPLICATION_VND_MS_PROJECT",
    ApplicationVndMsWordDocumentMacroenabled_12 = "APPLICATION_VND_MS_WORD_DOCUMENT_MACROENABLED_12",
    ApplicationVndMsWordTemplateMacroenabled_12 = "APPLICATION_VND_MS_WORD_TEMPLATE_MACROENABLED_12",
    ApplicationVndMsWrite = "APPLICATION_VND_MS_WRITE",
    ApplicationVndMsXpsdocument = "APPLICATION_VND_MS_XPSDOCUMENT",
    ApplicationVndOasisOpendocumentChart = "APPLICATION_VND_OASIS_OPENDOCUMENT_CHART",
    ApplicationVndOasisOpendocumentDatabase = "APPLICATION_VND_OASIS_OPENDOCUMENT_DATABASE",
    ApplicationVndOasisOpendocumentFormula = "APPLICATION_VND_OASIS_OPENDOCUMENT_FORMULA",
    ApplicationVndOasisOpendocumentGraphics = "APPLICATION_VND_OASIS_OPENDOCUMENT_GRAPHICS",
    ApplicationVndOasisOpendocumentPresentation = "APPLICATION_VND_OASIS_OPENDOCUMENT_PRESENTATION",
    ApplicationVndOasisOpendocumentSpreadsheet = "APPLICATION_VND_OASIS_OPENDOCUMENT_SPREADSHEET",
    ApplicationVndOasisOpendocumentText = "APPLICATION_VND_OASIS_OPENDOCUMENT_TEXT",
    ApplicationVndOpenxmlformatsOfficedocumentPresentationmlPresentation = "APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_PRESENTATIONML_PRESENTATION",
    ApplicationVndOpenxmlformatsOfficedocumentPresentationmlSlide = "APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_PRESENTATIONML_SLIDE",
    ApplicationVndOpenxmlformatsOfficedocumentPresentationmlSlideshow = "APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_PRESENTATIONML_SLIDESHOW",
    ApplicationVndOpenxmlformatsOfficedocumentPresentationmlTemplate = "APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_PRESENTATIONML_TEMPLATE",
    ApplicationVndOpenxmlformatsOfficedocumentSpreadsheetmlSheet = "APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_SPREADSHEETML_SHEET",
    ApplicationVndOpenxmlformatsOfficedocumentSpreadsheetmlTemplate = "APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_SPREADSHEETML_TEMPLATE",
    ApplicationVndOpenxmlformatsOfficedocumentWordprocessingmlDocument = "APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_WORDPROCESSINGML_DOCUMENT",
    ApplicationVndOpenxmlformatsOfficedocumentWordprocessingmlTemplate = "APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_WORDPROCESSINGML_TEMPLATE",
    ApplicationWordperfect = "APPLICATION_WORDPERFECT",
    ApplicationX_7ZCompressed = "APPLICATION_X_7Z_COMPRESSED",
    ApplicationXGzip = "APPLICATION_X_GZIP",
    ApplicationXTar = "APPLICATION_X_TAR",
    ApplicationZip = "APPLICATION_ZIP",
    AudioAac = "AUDIO_AAC",
    AudioFlac = "AUDIO_FLAC",
    AudioMidi = "AUDIO_MIDI",
    AudioMpeg = "AUDIO_MPEG",
    AudioOgg = "AUDIO_OGG",
    AudioWav = "AUDIO_WAV",
    AudioXMatroska = "AUDIO_X_MATROSKA",
    AudioXMsWax = "AUDIO_X_MS_WAX",
    AudioXMsWma = "AUDIO_X_MS_WMA",
    AudioXRealaudio = "AUDIO_X_REALAUDIO",
    ImageBmp = "IMAGE_BMP",
    ImageGif = "IMAGE_GIF",
    ImageJpeg = "IMAGE_JPEG",
    ImagePng = "IMAGE_PNG",
    ImageTiff = "IMAGE_TIFF",
    ImageXIcon = "IMAGE_X_ICON",
    TextCalendar = "TEXT_CALENDAR",
    TextCss = "TEXT_CSS",
    TextCsv = "TEXT_CSV",
    TextPlain = "TEXT_PLAIN",
    TextRichtext = "TEXT_RICHTEXT",
    TextTabSeparatedValues = "TEXT_TAB_SEPARATED_VALUES",
    TextVtt = "TEXT_VTT",
    Video_3Gpp = "VIDEO_3GPP",
    Video_3Gpp2 = "VIDEO_3GPP2",
    VideoAvi = "VIDEO_AVI",
    VideoDivx = "VIDEO_DIVX",
    VideoMp4 = "VIDEO_MP4",
    VideoMpeg = "VIDEO_MPEG",
    VideoOgg = "VIDEO_OGG",
    VideoQuicktime = "VIDEO_QUICKTIME",
    VideoWebm = "VIDEO_WEBM",
    VideoXFlv = "VIDEO_X_FLV",
    VideoXMatroska = "VIDEO_X_MATROSKA",
    VideoXMsAsf = "VIDEO_X_MS_ASF",
    VideoXMsWm = "VIDEO_X_MS_WM",
    VideoXMsWmv = "VIDEO_X_MS_WMV",
    VideoXMsWmx = "VIDEO_X_MS_WMX",
}
/** Field to order the connection by */
export enum PostObjectsConnectionOrderbyEnum {
    Author = "AUTHOR",
    Date = "DATE",
    In = "IN",
    MenuOrder = "MENU_ORDER",
    Modified = "MODIFIED",
    NameIn = "NAME_IN",
    Parent = "PARENT",
    Slug = "SLUG",
    Title = "TITLE",
}
/** The cardinality of the connection order */
export enum OrderEnum {
    Asc = "ASC",
    Desc = "DESC",
}
/** The status of the object. */
export enum PostStatusEnum {
    AcfDisabled = "ACF_DISABLED",
    AutoDraft = "AUTO_DRAFT",
    Draft = "DRAFT",
    Future = "FUTURE",
    Inherit = "INHERIT",
    Pending = "PENDING",
    Private = "PRIVATE",
    Publish = "PUBLISH",
    RequestCompleted = "REQUEST_COMPLETED",
    RequestConfirmed = "REQUEST_CONFIRMED",
    RequestFailed = "REQUEST_FAILED",
    RequestPending = "REQUEST_PENDING",
    Trash = "TRASH",
}
/** Which field to select taxonomy term by. Default value is "term_id" */
export enum CategoryToPostConnectionWhereArgsTaxQueryField {
    Id = "ID",
    Name = "NAME",
    Slug = "SLUG",
    TaxonomyId = "TAXONOMY_ID",
}

export enum CategoryToPostConnectionWhereArgsTaxQueryOperator {
    And = "AND",
    Exists = "EXISTS",
    In = "IN",
    NotExists = "NOT_EXISTS",
    NotIn = "NOT_IN",
}
/** What rating to display avatars up to. Accepts 'G', 'PG', 'R', 'X', and are judged in that order. Default is the value of the 'avatar_rating' option */
export enum AvatarRatingEnum {
    G = "G",
    Pg = "PG",
    R = "R",
    X = "X",
}
/** Options for ordering the connection */
export enum CommentsConnectionOrderbyEnum {
    CommentAgent = "COMMENT_AGENT",
    CommentApproved = "COMMENT_APPROVED",
    CommentAuthor = "COMMENT_AUTHOR",
    CommentAuthorEmail = "COMMENT_AUTHOR_EMAIL",
    CommentAuthorIp = "COMMENT_AUTHOR_IP",
    CommentAuthorUrl = "COMMENT_AUTHOR_URL",
    CommentContent = "COMMENT_CONTENT",
    CommentDate = "COMMENT_DATE",
    CommentDateGmt = "COMMENT_DATE_GMT",
    CommentId = "COMMENT_ID",
    CommentIn = "COMMENT_IN",
    CommentKarma = "COMMENT_KARMA",
    CommentParent = "COMMENT_PARENT",
    CommentPostId = "COMMENT_POST_ID",
    CommentType = "COMMENT_TYPE",
    UserId = "USER_ID",
}
/** The format of post field data. */
export enum PostObjectFieldFormatEnum {
    Raw = "RAW",
    Rendered = "RENDERED",
}
/** Which field to select taxonomy term by. Default value is "term_id" */
export enum UserToDemoConnectionWhereArgsTaxQueryField {
    Id = "ID",
    Name = "NAME",
    Slug = "SLUG",
    TaxonomyId = "TAXONOMY_ID",
}

export enum UserToDemoConnectionWhereArgsTaxQueryOperator {
    And = "AND",
    Exists = "EXISTS",
    In = "IN",
    NotExists = "NOT_EXISTS",
    NotIn = "NOT_IN",
}
/** Which field to select taxonomy term by. Default value is "term_id" */
export enum TagToPostConnectionWhereArgsTaxQueryField {
    Id = "ID",
    Name = "NAME",
    Slug = "SLUG",
    TaxonomyId = "TAXONOMY_ID",
}

export enum TagToPostConnectionWhereArgsTaxQueryOperator {
    And = "AND",
    Exists = "EXISTS",
    In = "IN",
    NotExists = "NOT_EXISTS",
    NotIn = "NOT_IN",
}
/** Which field to select taxonomy term by. Default value is "term_id" */
export enum UserToMediaItemConnectionWhereArgsTaxQueryField {
    Id = "ID",
    Name = "NAME",
    Slug = "SLUG",
    TaxonomyId = "TAXONOMY_ID",
}

export enum UserToMediaItemConnectionWhereArgsTaxQueryOperator {
    And = "AND",
    Exists = "EXISTS",
    In = "IN",
    NotExists = "NOT_EXISTS",
    NotIn = "NOT_IN",
}
/** The size of the media item object. */
export enum MediaItemSizeEnum {
    Large = "LARGE",
    Medium = "MEDIUM",
    MediumLarge = "MEDIUM_LARGE",
    Thumbnail = "THUMBNAIL",
}
/** Which field to select taxonomy term by. Default value is "term_id" */
export enum UserToPageConnectionWhereArgsTaxQueryField {
    Id = "ID",
    Name = "NAME",
    Slug = "SLUG",
    TaxonomyId = "TAXONOMY_ID",
}

export enum UserToPageConnectionWhereArgsTaxQueryOperator {
    And = "AND",
    Exists = "EXISTS",
    In = "IN",
    NotExists = "NOT_EXISTS",
    NotIn = "NOT_IN",
}
/** Which field to select taxonomy term by. Default value is "term_id" */
export enum UserToPostConnectionWhereArgsTaxQueryField {
    Id = "ID",
    Name = "NAME",
    Slug = "SLUG",
    TaxonomyId = "TAXONOMY_ID",
}

export enum UserToPostConnectionWhereArgsTaxQueryOperator {
    And = "AND",
    Exists = "EXISTS",
    In = "IN",
    NotExists = "NOT_EXISTS",
    NotIn = "NOT_IN",
}
/** Which field to select taxonomy term by. Default value is "term_id" */
export enum UserToRevisionConnectionWhereArgsTaxQueryField {
    Id = "ID",
    Name = "NAME",
    Slug = "SLUG",
    TaxonomyId = "TAXONOMY_ID",
}

export enum UserToRevisionConnectionWhereArgsTaxQueryOperator {
    And = "AND",
    Exists = "EXISTS",
    In = "IN",
    NotExists = "NOT_EXISTS",
    NotIn = "NOT_IN",
}
/** Which field to select taxonomy term by. Default value is "term_id" */
export enum PageToPageConnectionWhereArgsTaxQueryField {
    Id = "ID",
    Name = "NAME",
    Slug = "SLUG",
    TaxonomyId = "TAXONOMY_ID",
}

export enum PageToPageConnectionWhereArgsTaxQueryOperator {
    And = "AND",
    Exists = "EXISTS",
    In = "IN",
    NotExists = "NOT_EXISTS",
    NotIn = "NOT_IN",
}
/** Which field to select taxonomy term by. Default value is "term_id" */
export enum RootQueryToDemoConnectionWhereArgsTaxQueryField {
    Id = "ID",
    Name = "NAME",
    Slug = "SLUG",
    TaxonomyId = "TAXONOMY_ID",
}

export enum RootQueryToDemoConnectionWhereArgsTaxQueryOperator {
    And = "AND",
    Exists = "EXISTS",
    In = "IN",
    NotExists = "NOT_EXISTS",
    NotIn = "NOT_IN",
}
/** Which field to select taxonomy term by. Default value is "term_id" */
export enum RootQueryToMediaItemConnectionWhereArgsTaxQueryField {
    Id = "ID",
    Name = "NAME",
    Slug = "SLUG",
    TaxonomyId = "TAXONOMY_ID",
}

export enum RootQueryToMediaItemConnectionWhereArgsTaxQueryOperator {
    And = "AND",
    Exists = "EXISTS",
    In = "IN",
    NotExists = "NOT_EXISTS",
    NotIn = "NOT_IN",
}
/** Registered menu locations */
export enum MenuLocationEnum {
    TopMenu = "TOP_MENU",
}
/** Which field to select taxonomy term by. Default value is "term_id" */
export enum RootQueryToPageConnectionWhereArgsTaxQueryField {
    Id = "ID",
    Name = "NAME",
    Slug = "SLUG",
    TaxonomyId = "TAXONOMY_ID",
}

export enum RootQueryToPageConnectionWhereArgsTaxQueryOperator {
    And = "AND",
    Exists = "EXISTS",
    In = "IN",
    NotExists = "NOT_EXISTS",
    NotIn = "NOT_IN",
}
/** Which field to select taxonomy term by. Default value is "term_id" */
export enum RootQueryToPostConnectionWhereArgsTaxQueryField {
    Id = "ID",
    Name = "NAME",
    Slug = "SLUG",
    TaxonomyId = "TAXONOMY_ID",
}

export enum RootQueryToPostConnectionWhereArgsTaxQueryOperator {
    And = "AND",
    Exists = "EXISTS",
    In = "IN",
    NotExists = "NOT_EXISTS",
    NotIn = "NOT_IN",
}
/** Which field to select taxonomy term by. Default value is "term_id" */
export enum RootQueryToRevisionConnectionWhereArgsTaxQueryField {
    Id = "ID",
    Name = "NAME",
    Slug = "SLUG",
    TaxonomyId = "TAXONOMY_ID",
}

export enum RootQueryToRevisionConnectionWhereArgsTaxQueryOperator {
    And = "AND",
    Exists = "EXISTS",
    In = "IN",
    NotExists = "NOT_EXISTS",
    NotIn = "NOT_IN",
}
/** Names of available user roles */
export enum UserRoleEnum {
    Administrator = "ADMINISTRATOR",
    Author = "AUTHOR",
    Contributor = "CONTRIBUTOR",
    Editor = "EDITOR",
    Subscriber = "SUBSCRIBER",
}
/** Column used for searching for users */
export enum UsersConnectionSearchColumnEnum {
    Email = "EMAIL",
    Id = "ID",
    Login = "LOGIN",
    Nicename = "NICENAME",
    Url = "URL",
}
/** The status of the media item object. */
export enum MediaItemStatusEnum {
    AutoDraft = "AUTO_DRAFT",
    Inherit = "INHERIT",
    Private = "PRIVATE",
    Trash = "TRASH",
}

// ====================================================
// Documents
// ====================================================

export type PostsVariables = {};

export type PostsQuery = {
    __typename?: "Query";

    posts: Maybe<PostsPosts>;
};

export type PostsPosts = {
    __typename?: "RootQueryToPostConnection";

    edges: Maybe<(Maybe<PostsEdges>)[]>;
};

export type PostsEdges = {
    __typename?: "RootQueryToPostConnectionEdge";

    node: Maybe<PostsNode>;
};

export type PostsNode = {
    __typename?: "Post";

    id: string;

    title: Maybe<string>;

    content: Maybe<string>;

    tags: Maybe<PostsTags>;
};

export type PostsTags = {
    __typename?: "PostToTagConnection";

    edges: Maybe<(Maybe<Posts_Edges>)[]>;
};

export type Posts_Edges = {
    __typename?: "PostToTagConnectionEdge";

    node: Maybe<Posts_Node>;
};

export type Posts_Node = {
    __typename?: "Tag";

    name: Maybe<string>;

    slug: Maybe<string>;
};
