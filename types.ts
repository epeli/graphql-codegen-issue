type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
    ID: string;
    String: string;
    Boolean: boolean;
    Int: number;
    Float: number;
};

/** Avatars are profile images for users. WordPress by default uses the Gravatar service to host and fetch avatars from. */
export type Avatar = {
    /** URL for the default image or a default type. Accepts &#039;404&#039; (return a
     * 404 instead of a default image), &#039;retro&#039; (8bit),
     * &#039;monsterid&#039; (monster), &#039;wavatar&#039; (cartoon face),
     * &#039;indenticon&#039; (the &#039;quilt&#039;), &#039;mystery&#039;,
     * &#039;mm&#039;, or &#039;mysteryman&#039; (The Oyster Man), &#039;blank&#039;
     * (transparent GIF), or &#039;gravatar_default&#039; (the Gravatar logo).
     */
    default?: Maybe<Scalars["String"]>;
    /** HTML attributes to insert in the IMG element. Is not sanitized. */
    extraAttr?: Maybe<Scalars["String"]>;
    /** Whether to always show the default image, never the Gravatar. */
    forceDefault?: Maybe<Scalars["Boolean"]>;
    /** Whether the avatar was successfully found. */
    foundAvatar?: Maybe<Scalars["Boolean"]>;
    /** Height of the avatar image. */
    height?: Maybe<Scalars["Int"]>;
    /** What rating to display avatars up to. Accepts &#039;G&#039;, &#039;PG&#039;,
     * &#039;R&#039;, &#039;X&#039;, and are judged in that order.
     */
    rating?: Maybe<Scalars["String"]>;
    /** Type of url scheme to use. Typically HTTP vs. HTTPS. */
    scheme?: Maybe<Scalars["String"]>;
    /** The size of the avatar in pixels. A value of 96 will match a 96px x 96px gravatar image. */
    size?: Maybe<Scalars["Int"]>;
    /** URL for the gravatar image source. */
    url?: Maybe<Scalars["String"]>;
    /** Width of the avatar image. */
    width?: Maybe<Scalars["Int"]>;
};

/** What rating to display avatars up to. Accepts 'G', 'PG', 'R', 'X', and are
 * judged in that order. Default is the value of the 'avatar_rating' option
 */
export enum AvatarRatingEnum {
    G = "G",
    Pg = "PG",
    R = "R",
    X = "X",
}

/** The category type */
export type Category = Node & {
    /** The ancestors of the object */
    ancestors?: Maybe<Array<Maybe<Category>>>;
    /** The id field matches the WP_Post-&gt;ID field. */
    categoryId?: Maybe<Scalars["Int"]>;
    /** Connection between the category type and the category type */
    children?: Maybe<CategoryToCategoryConnection>;
    /** The number of objects connected to the object */
    count?: Maybe<Scalars["Int"]>;
    /** The description of the object */
    description?: Maybe<Scalars["String"]>;
    /** The global ID for the category */
    id: Scalars["ID"];
    /** The link to the term */
    link?: Maybe<Scalars["String"]>;
    /** The human friendly name of the object. */
    name?: Maybe<Scalars["String"]>;
    /** The parent object */
    parent?: Maybe<Category>;
    /** Connection between the category type and the category type */
    posts?: Maybe<CategoryToPostConnection>;
    /** An alphanumeric identifier for the object unique to its type. */
    slug?: Maybe<Scalars["String"]>;
    /** The name of the taxonomy this term belongs to */
    taxonomy?: Maybe<Taxonomy>;
    /** The ID of the term group that this term object belongs to */
    termGroupId?: Maybe<Scalars["Int"]>;
    /** The taxonomy ID that the object is associated with */
    termTaxonomyId?: Maybe<Scalars["Int"]>;
};

/** The category type */
export type CategoryChildrenArgs = {
    first?: Maybe<Scalars["Int"]>;
    last?: Maybe<Scalars["Int"]>;
    after?: Maybe<Scalars["String"]>;
    before?: Maybe<Scalars["String"]>;
    where?: Maybe<CategoryToCategoryConnectionWhereArgs>;
};

/** The category type */
export type CategoryPostsArgs = {
    first?: Maybe<Scalars["Int"]>;
    last?: Maybe<Scalars["Int"]>;
    after?: Maybe<Scalars["String"]>;
    before?: Maybe<Scalars["String"]>;
    where?: Maybe<CategoryToPostConnectionWhereArgs>;
};

/** Connection between the category type and the category type */
export type CategoryToCategoryConnection = {
    /** Edges for the CategoryToCategoryConnection connection */
    edges?: Maybe<Array<Maybe<CategoryToCategoryConnectionEdge>>>;
    /** The nodes of the connection, without the edges */
    nodes?: Maybe<Array<Maybe<Category>>>;
    /** Information about pagination in a connection. */
    pageInfo?: Maybe<WpPageInfo>;
    /** Information about the type of content being queried */
    taxonomyInfo?: Maybe<Taxonomy>;
};

/** An edge in a connection */
export type CategoryToCategoryConnectionEdge = {
    /** A cursor for use in pagination */
    cursor?: Maybe<Scalars["String"]>;
    /** The item at the end of the edge */
    node?: Maybe<Category>;
};

/** Arguments for filtering the CategoryToCategoryConnection connection */
export type CategoryToCategoryConnectionWhereArgs = {
    /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
    cacheDomain?: Maybe<Scalars["String"]>;
    /** True to limit results to terms that have no children. This parameter has no
     * effect on non-hierarchical taxonomies. Default false.
     */
    childless?: Maybe<Scalars["Boolean"]>;
    /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
    childOf?: Maybe<Scalars["Int"]>;
    /** Retrieve terms where the description is LIKE the input value. Default empty. */
    descriptionLike?: Maybe<Scalars["String"]>;
    /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
    exclude?: Maybe<Array<Maybe<Scalars["ID"]>>>;
    /** Array of term ids to exclude along with all of their descendant terms. If
     * $include is non-empty, $exclude_tree is ignored. Default empty array.
     */
    excludeTree?: Maybe<Array<Maybe<Scalars["ID"]>>>;
    /** Whether to hide terms not assigned to any posts. Accepts true or false. Default true */
    hideEmpty?: Maybe<Scalars["Boolean"]>;
    /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
    hierarchical?: Maybe<Scalars["Boolean"]>;
    /** Array of term ids to include. Default empty array. */
    include?: Maybe<Array<Maybe<Scalars["ID"]>>>;
    /** Array of names to return term(s) for. Default empty. */
    name?: Maybe<Array<Maybe<Scalars["String"]>>>;
    /** Retrieve terms where the name is LIKE the input value. Default empty. */
    nameLike?: Maybe<Scalars["String"]>;
    /** Array of object IDs. Results will be limited to terms associated with these objects. */
    objectIds?: Maybe<Array<Maybe<Scalars["ID"]>>>;
    /** Field(s) to order terms by. Defaults to 'name'. */
    orderby?: Maybe<TermObjectsConnectionOrderbyEnum>;
    /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
    padCounts?: Maybe<Scalars["Boolean"]>;
    /** Parent term ID to retrieve direct-child terms of. Default empty. */
    parent?: Maybe<Scalars["Int"]>;
    /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
    search?: Maybe<Scalars["String"]>;
    /** Default false. If true, only the items connected to the source item will be
     * returned. If false, all items will be returned regardless of connection to the source
     */
    shouldOnlyIncludeConnectedItems?: Maybe<Scalars["Boolean"]>;
    /** Default false. If true, the connection will be output in a flat list instead
     * of the hierarchical list. So child terms will be output in the same level as
     * the parent terms
     */
    shouldOutputInFlatList?: Maybe<Scalars["Boolean"]>;
    /** Array of slugs to return term(s) for. Default empty. */
    slug?: Maybe<Array<Maybe<Scalars["String"]>>>;
    /** Array of term taxonomy IDs, to match when querying terms. */
    termTaxonomId?: Maybe<Array<Maybe<Scalars["ID"]>>>;
    /** Whether to prime meta caches for matched terms. Default true. */
    updateTermMetaCache?: Maybe<Scalars["Boolean"]>;
};

/** Connection between the category type and the category type */
export type CategoryToPostConnection = {
    /** Edges for the CategoryToPostConnection connection */
    edges?: Maybe<Array<Maybe<CategoryToPostConnectionEdge>>>;
    /** The nodes of the connection, without the edges */
    nodes?: Maybe<Array<Maybe<Post>>>;
    /** Information about pagination in a connection. */
    pageInfo?: Maybe<WpPageInfo>;
    /** Information about the type of content being queried */
    postTypeInfo?: Maybe<PostType>;
};

/** An edge in a connection */
export type CategoryToPostConnectionEdge = {
    /** A cursor for use in pagination */
    cursor?: Maybe<Scalars["String"]>;
    /** The item at the end of the edge */
    node?: Maybe<Post>;
};

/** Arguments for filtering the CategoryToPostConnection connection */
export type CategoryToPostConnectionWhereArgs = {
    /** The user that's connected as the author of the object. Use the
     * 							userId for the author object.
     */
    author?: Maybe<Scalars["Int"]>;
    /** Find objects connected to author(s) in the array of author's userIds */
    authorIn?: Maybe<Array<Maybe<Scalars["ID"]>>>;
    /** Find objects connected to the author by the author's nicename */
    authorName?: Maybe<Scalars["String"]>;
    /** Find objects NOT connected to author(s) in the array of author's
     * 							userIds
     */
    authorNotIn?: Maybe<Array<Maybe<Scalars["ID"]>>>;
    /** Category ID */
    categoryId?: Maybe<Scalars["Int"]>;
    /** Array of category IDs, used to display objects from one
     * 										category OR another
     */
    categoryIn?: Maybe<Array<Maybe<Scalars["ID"]>>>;
    /** Use Category Slug */
    categoryName?: Maybe<Scalars["String"]>;
    /** Array of category IDs, used to display objects from one
     * 										category OR another
     */
    categoryNotIn?: Maybe<Array<Maybe<Scalars["ID"]>>>;
    /** Filter the connection based on dates */
    dateQuery?: Maybe<DateQueryInput>;
    /** True for objects with passwords; False for objects without passwords;
     * 							null for all objects with or without passwords
     */
    hasPassword?: Maybe<Scalars["Boolean"]>;
    /** Specific ID of the object */
    id?: Maybe<Scalars["Int"]>;
    /** Array of IDs for the objects to retrieve */
    in?: Maybe<Array<Maybe<Scalars["ID"]>>>;
    /** Get objects with a specific mimeType property */
    mimeType?: Maybe<MimeTypeEnum>;
    /** Slug / post_name of the object */
    name?: Maybe<Scalars["String"]>;
    /** Specify objects to retrieve. Use slugs */
    nameIn?: Maybe<Array<Maybe<Scalars["String"]>>>;
    /** Specify IDs NOT to retrieve. If this is used in the same query as "in",
     * 							it will be ignored
     */
    notIn?: Maybe<Array<Maybe<Scalars["ID"]>>>;
    /** What paramater to use to order the objects by. */
    orderby?: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>;
    /** Use ID to return only children. Use 0 to return only top-level
     * 							items
     */
    parent?: Maybe<Scalars["String"]>;
    /** Specify objects whose parent is in an array */
    parentIn?: Maybe<Array<Maybe<Scalars["ID"]>>>;
    /** Specify posts whose parent is not in an array */
    parentNotIn?: Maybe<Array<Maybe<Scalars["ID"]>>>;
    /** Show posts with a specific password. */
    password?: Maybe<Scalars["String"]>;
    /** Show Posts based on a keyword search */
    search?: Maybe<Scalars["String"]>;
    stati?: Maybe<Array<Maybe<PostStatusEnum>>>;
    status?: Maybe<PostStatusEnum>;
    /** Tag Slug */
    tag?: Maybe<Scalars["String"]>;
    /** Use Tag ID */
    tagId?: Maybe<Scalars["String"]>;
    /** Array of tag IDs, used to display objects from one tag OR
     * 							another
     */
    tagIn?: Maybe<Array<Maybe<Scalars["ID"]>>>;
    /** Array of tag IDs, used to display objects from one tag OR
     * 							another
     */
    tagNotIn?: Maybe<Array<Maybe<Scalars["ID"]>>>;
    /** Array of tag slugs, used to display objects from one tag OR
     * 							another
     */
    tagSlugAnd?: Maybe<Array<Maybe<Scalars["String"]>>>;
    /** Array of tag slugs, used to exclude objects in specified
     * 							tags
     */
    tagSlugIn?: Maybe<Array<Maybe<Scalars["String"]>>>;
    taxQuery?: Maybe<CategoryToPostConnectionWhereArgsTaxQuery>;
    /** Title of the object */
    title?: Maybe<Scalars["String"]>;
};

export type CategoryToPostConnectionWhereArgsTaxArray = {
    taxonomy?: Maybe<TaxonomyEnum>;
    field?: Maybe<CategoryToPostConnectionWhereArgsTaxQueryField>;
    /** A list of term slugs */
    terms?: Maybe<Array<Maybe<Scalars["String"]>>>;
    /** Whether or not to include children for hierarchical
     * 											taxonomies. Defaults to false to improve performance (note that
     * 											this is opposite of the default for WP_Query).
     */
    includeChildren?: Maybe<Scalars["Boolean"]>;
    operator?: Maybe<CategoryToPostConnectionWhereArgsTaxQueryOperator>;
};

/** Query objects based on taxonomy parameters */
export type CategoryToPostConnectionWhereArgsTaxQuery = {
    relation?: Maybe<RelationEnum>;
    taxArray?: Maybe<Array<Maybe<CategoryToPostConnectionWhereArgsTaxArray>>>;
};

/** Which field to select taxonomy term by. Default value is "term_id" */
export enum CategoryToPostConnectionWhereArgsTaxQueryField {
    Id = "ID",
    Name = "NAME",
    Slug = "SLUG",
    Taxonomy_Id = "TAXONOMY_ID",
}

export enum CategoryToPostConnectionWhereArgsTaxQueryOperator {
    And = "AND",
    Exists = "EXISTS",
    In = "IN",
    Not_Exists = "NOT_EXISTS",
    Not_In = "NOT_IN",
}

/** A Comment object */
export type Comment = Node & {
    /** User agent used to post the comment. This field is equivalent to
     * WP_Comment-&gt;comment_agent and the value matching the
     * &quot;comment_agent&quot; column in SQL.
     */
    agent?: Maybe<Scalars["String"]>;
    /** The approval status of the comment. This field is equivalent to
     * WP_Comment-&gt;comment_approved and the value matching the
     * &quot;comment_approved&quot; column in SQL.
     */
    approved?: Maybe<Scalars["String"]>;
    /** The author of the comment */
    author?: Maybe<CommentAuthorUnion>;
    /** IP address for the author. This field is equivalent to
     * WP_Comment-&gt;comment_author_IP and the value matching the
     * &quot;comment_author_IP&quot; column in SQL.
     */
    authorIp?: Maybe<Scalars["String"]>;
    /** Connection between the Comment type and the Comment type */
    children?: Maybe<CommentToCommentConnection>;
    /** The object the comment was added to */
    commentedOn?: Maybe<PostObjectUnion>;
    /** ID for the comment, unique among comments. */
    commentId?: Maybe<Scalars["Int"]>;
    /** Content of the comment. This field is equivalent to
     * WP_Comment-&gt;comment_content and the value matching the
     * &quot;comment_content&quot; column in SQL.
     */
    content?: Maybe<Scalars["String"]>;
    /** Date the comment was posted in local time. This field is equivalent to
     * WP_Comment-&gt;date and the value matching the &quot;date&quot; column in SQL.
     */
    date?: Maybe<Scalars["String"]>;
    /** Date the comment was posted in GMT. This field is equivalent to
     * WP_Comment-&gt;date_gmt and the value matching the &quot;date_gmt&quot; column in SQL.
     */
    dateGmt?: Maybe<Scalars["String"]>;
    /** The globally unique identifier for the user */
    id: Scalars["ID"];
    /** Karma value for the comment. This field is equivalent to
     * WP_Comment-&gt;comment_karma and the value matching the
     * &quot;comment_karma&quot; column in SQL.
     */
    karma?: Maybe<Scalars["Int"]>;
    /** Parent comment of current comment. This field is equivalent to the WP_Comment
     * instance matching the WP_Comment-&gt;comment_parent ID.
     */
    parent?: Maybe<Comment>;
    /** Type of comment. This field is equivalent to WP_Comment-&gt;comment_type and
     * the value matching the &quot;comment_type&quot; column in SQL.
     */
    type?: Maybe<Scalars["String"]>;
};

/** A Comment object */
export type CommentChildrenArgs = {
    first?: Maybe<Scalars["Int"]>;
    last?: Maybe<Scalars["Int"]>;
    after?: Maybe<Scalars["String"]>;
    before?: Maybe<Scalars["String"]>;
    where?: Maybe<CommentToCommentConnectionWhereArgs>;
};

/** A Comment object */
export type CommentContentArgs = {
    format?: Maybe<PostObjectFieldFormatEnum>;
};

/** A Comment Author object */
export type CommentAuthor = Node & {
    /** The email for the comment author */
    email?: Maybe<Scalars["String"]>;
    /** The globally unique identifier for the Comment Author user */
    id: Scalars["ID"];
    /** The name for the comment author. */
    name?: Maybe<Scalars["String"]>;
    /** The url the comment author. */
    url?: Maybe<Scalars["String"]>;
};

export type CommentAuthorUnion = User | CommentAuthor;

/** Options for ordering the connection */
export enum CommentsConnectionOrderbyEnum {
    Comment_Agent = "COMMENT_AGENT",
    Comment_Approved = "COMMENT_APPROVED",
    Comment_Author = "COMMENT_AUTHOR",
    Comment_Author_Email = "COMMENT_AUTHOR_EMAIL",
    Comment_Author_Ip = "COMMENT_AUTHOR_IP",
    Comment_Author_Url = "COMMENT_AUTHOR_URL",
    Comment_Content = "COMMENT_CONTENT",
    Comment_Date = "COMMENT_DATE",
    Comment_Date_Gmt = "COMMENT_DATE_GMT",
    Comment_Id = "COMMENT_ID",
    Comment_In = "COMMENT_IN",
    Comment_Karma = "COMMENT_KARMA",
    Comment_Parent = "COMMENT_PARENT",
    Comment_Post_Id = "COMMENT_POST_ID",
    Comment_Type = "COMMENT_TYPE",
    User_Id = "USER_ID",
}

/** Connection between the Comment type and the Comment type */
export type CommentToCommentConnection = {
    /** Edges for the CommentToCommentConnection connection */
    edges?: Maybe<Array<Maybe<CommentToCommentConnectionEdge>>>;
    /** The nodes of the connection, without the edges */
    nodes?: Maybe<Array<Maybe<Comment>>>;
    /** Information about pagination in a connection. */
    pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type CommentToCommentConnectionEdge = {
    /** A cursor for use in pagination */
    cursor?: Maybe<Scalars["String"]>;
    /** The item at the end of the edge */
    node?: Maybe<Comment>;
};

/** Arguments for filtering the CommentToCommentConnection connection */
export type CommentToCommentConnectionWhereArgs = {
    /** Comment author email address. */
    authorEmail?: Maybe<Scalars["String"]>;
    /** Array of author IDs to include comments for. */
    authorIn?: Maybe<Array<Maybe<Scalars["ID"]>>>;
    /** Array of author IDs to exclude comments for. */
    authorNotIn?: Maybe<Array<Maybe<Scalars["ID"]>>>;
    /** Comment author URL. */
    authorUrl?: Maybe<Scalars["String"]>;
    /** Array of comment IDs to include. */
    commentIn?: Maybe<Array<Maybe<Scalars["ID"]>>>;
    /** Array of IDs of users whose unapproved comments will be returned by the
     * 							query regardless of status.
     */
    commentNotIn?: Maybe<Array<Maybe<Scalars["ID"]>>>;
    /** Include comments of a given type. */
    commentType?: Maybe<Scalars["String"]>;
    /** Include comments from a given array of comment types. */
    commentTypeIn?: Maybe<Array<Maybe<Scalars["String"]>>>;
    /** Exclude comments from a given array of comment types. */
    commentTypeNotIn?: Maybe<Scalars["String"]>;
    /** Content object author ID to limit results by. */
    contentAuthor?: Maybe<Array<Maybe<Scalars["ID"]>>>;
    /** Array of author IDs to retrieve comments for. */
    contentAuthorIn?: Maybe<Array<Maybe<Scalars["ID"]>>>;
    /** Array of author IDs *not* to retrieve comments for. */
    contentAuthorNotIn?: Maybe<Array<Maybe<Scalars["ID"]>>>;
    /** Limit results to those affiliated with a given content object
     * 							ID.
     */
    contentId?: Maybe<Scalars["ID"]>;
    /** Array of content object IDs to include affiliated comments
     * 							for.
     */
    contentIdIn?: Maybe<Array<Maybe<Scalars["ID"]>>>;
    /** Array of content object IDs to exclude affiliated comments
     * 							for.
     */
    contentIdNotIn?: Maybe<Array<Maybe<Scalars["ID"]>>>;
    /** Content object name to retrieve affiliated comments for. */
    contentName?: Maybe<Scalars["String"]>;
    /** Content Object parent ID to retrieve affiliated comments for. */
    contentParent?: Maybe<Scalars["Int"]>;
    /** Array of content object statuses to retrieve affiliated comments for.
     * 							Pass 'any' to match any value.
     */
    contentStatus?: Maybe<Array<Maybe<PostStatusEnum>>>;
    /** Content object type or array of types to retrieve affiliated comments for. Pass 'any' to match any value. */
    contentType?: Maybe<Array<Maybe<PostStatusEnum>>>;
    /** Array of author IDs to include comments for. */
    includeUnapproved?: Maybe<Array<Maybe<Scalars["ID"]>>>;
    /** Karma score to retrieve matching comments for. */
    karma?: Maybe<Scalars["Int"]>;
    /** The cardinality of the order of the connection */
    order?: Maybe<OrderEnum>;
    /** Field to order the comments by. */
    orderby?: Maybe<CommentsConnectionOrderbyEnum>;
    /** Parent ID of comment to retrieve children of. */
    parent?: Maybe<Scalars["Int"]>;
    /** Array of parent IDs of comments to retrieve children for. */
    parentIn?: Maybe<Array<Maybe<Scalars["ID"]>>>;
    /** Array of parent IDs of comments *not* to retrieve children
     * 							for.
     */
    parentNotIn?: Maybe<Array<Maybe<Scalars["ID"]>>>;
    /** Search term(s) to retrieve matching comments for. */
    search?: Maybe<Scalars["String"]>;
    /** Comment status to limit results by. */
    status?: Maybe<Scalars["String"]>;
    /** Include comments for a specific user ID. */
    userId?: Maybe<Scalars["ID"]>;
};

/** Input for the createCategory mutation */
export type CreateCategoryInput = {
    /** The slug that the category will be an alias of */
    aliasOf?: Maybe<Scalars["String"]>;
    clientMutationId: Scalars["String"];
    /** The description of the category object */
    description?: Maybe<Scalars["String"]>;
    /** The name of the category object to mutate */
    name: Scalars["String"];
    /** The ID of the category that should be set as the parent */
    parentId?: Maybe<Scalars["ID"]>;
    /** If this argument exists then the slug will be checked to see if it is not an
     * existing valid term. If that check succeeds (it is not a valid term), then it
     * is added and the term id is given. If it fails, then a check is made to
     * whether the taxonomy is hierarchical and the parent argument is not empty. If
     * the second check succeeds, the term will be inserted and the term id will be
     * given. If the slug argument is empty, then it will be calculated from the term name.
     */
    slug?: Maybe<Scalars["String"]>;
};

/** The payload for the createCategory mutation */
export type CreateCategoryPayload = {
    /** The created category */
    category?: Maybe<Category>;
    clientMutationId: Scalars["String"];
};

/** Input for the createComment mutation */
export type CreateCommentInput = {
    /** User agent used to post the comment. */
    agent?: Maybe<Scalars["String"]>;
    /** The approval status of the comment. */
    approved?: Maybe<Scalars["String"]>;
    /** The name of the comment's author. */
    author?: Maybe<Scalars["String"]>;
    /** The email of the comment's author. */
    authorEmail?: Maybe<Scalars["String"]>;
    /** IP address for the comment's author. */
    authorIp?: Maybe<Scalars["String"]>;
    /** The url of the comment's author. */
    authorUrl?: Maybe<Scalars["String"]>;
    clientMutationId: Scalars["String"];
    /** Content of the comment. */
    content?: Maybe<Scalars["String"]>;
    /** The date of the object. Preferable to enter as year/month/day ( e.g.
     * 01/31/2017 ) as it will rearrange date as fit if it is not specified.
     * Incomplete dates may have unintended results for example, "2017" as the input
     * will use current date with timestamp 20:17
     */
    date?: Maybe<Scalars["String"]>;
    /** Parent comment of current comment. */
    parent?: Maybe<Scalars["ID"]>;
    /** The ID of the post the comment belongs to. */
    postId?: Maybe<Scalars["Int"]>;
    /** Type of comment. */
    type?: Maybe<Scalars["String"]>;
    /** The userID of the comment's author. */
    userId?: Maybe<Scalars["Int"]>;
};

/** The payload for the createComment mutation */
export type CreateCommentPayload = {
    clientMutationId: Scalars["String"];
    /** The comment that was created */
    comment?: Maybe<Comment>;
};

/** Input for the createDemo mutation */
export type CreateDemoInput = {
    /** The userId to assign as the author of the post */
    authorId?: Maybe<Scalars["ID"]>;
    clientMutationId: Scalars["String"];
    /** The number of comments. Even though WPGraphQL denotes this field as an
     * integer, in WordPress this field should be saved as a numeric string for compatibility.
     */
    commentCount?: Maybe<Scalars["Int"]>;
    /** The comment status for the object */
    commentStatus?: Maybe<Scalars["String"]>;
    /** The content of the object */
    content?: Maybe<Scalars["String"]>;
    /** The date of the object. Preferable to enter as year/month/day (e.g.
     * 01/31/2017) as it will rearrange date as fit if it is not specified.
     * Incomplete dates may have unintended results for example, "2017" as the input
     * will use current date with timestamp 20:17
     */
    date?: Maybe<Scalars["String"]>;
    /** The excerpt of the object */
    excerpt?: Maybe<Scalars["String"]>;
    /** A field used for ordering posts. This is typically used with nav menu items or
     * for special ordering of hierarchical content types.
     */
    menuOrder?: Maybe<Scalars["Int"]>;
    /** If the post is an attachment or a media file, this field will carry the
     * corresponding MIME type. This field is equivalent to the value of
     * WP_Post->post_mime_type and the post_mime_type column in the "post_objects"
     * database table.
     */
    mimeType?: Maybe<MimeTypeEnum>;
    /** The ID of the parent object */
    parentId?: Maybe<Scalars["ID"]>;
    /** The password used to protect the content of the object */
    password?: Maybe<Scalars["String"]>;
    /** URLs that have been pinged. */
    pinged?: Maybe<Array<Maybe<Scalars["String"]>>>;
    /** The ping status for the object */
    pingStatus?: Maybe<Scalars["String"]>;
    /** The slug of the object */
    slug?: Maybe<Scalars["String"]>;
    /** The status of the object */
    status?: Maybe<PostStatusEnum>;
    /** The title of the post */
    title?: Maybe<Scalars["String"]>;
    /** URLs queued to be pinged. */
    toPing?: Maybe<Array<Maybe<Scalars["String"]>>>;
};

/** The payload for the createDemo mutation */
export type CreateDemoPayload = {
    clientMutationId: Scalars["String"];
    demo?: Maybe<Demo>;
};

/** Input for the createMediaItem mutation */
export type CreateMediaItemInput = {
    /** Alternative text to display when mediaItem is not displayed */
    altText?: Maybe<Scalars["String"]>;
    /** The userId to assign as the author of the mediaItem */
    authorId?: Maybe<Scalars["ID"]>;
    /** The caption for the mediaItem */
    caption?: Maybe<Scalars["String"]>;
    clientMutationId: Scalars["String"];
    /** The comment status for the mediaItem */
    commentStatus?: Maybe<Scalars["String"]>;
    /** The date of the mediaItem */
    date?: Maybe<Scalars["String"]>;
    /** The date (in GMT zone) of the mediaItem */
    dateGmt?: Maybe<Scalars["String"]>;
    /** Description of the mediaItem */
    description?: Maybe<Scalars["String"]>;
    /** The file name of the mediaItem */
    filePath?: Maybe<Scalars["String"]>;
    /** The file type of the mediaItem */
    fileType?: Maybe<MimeTypeEnum>;
    /** The WordPress post ID or the graphQL postId of the parent object */
    parentId?: Maybe<Scalars["ID"]>;
    /** The ping status for the mediaItem */
    pingStatus?: Maybe<Scalars["String"]>;
    /** The slug of the mediaItem */
    slug?: Maybe<Scalars["String"]>;
    /** The status of the mediaItem */
    status?: Maybe<MediaItemStatusEnum>;
    /** The title of the mediaItem */
    title?: Maybe<Scalars["String"]>;
};

/** The payload for the createMediaItem mutation */
export type CreateMediaItemPayload = {
    clientMutationId: Scalars["String"];
    mediaItem?: Maybe<MediaItem>;
};

/** Input for the createPage mutation */
export type CreatePageInput = {
    /** The userId to assign as the author of the post */
    authorId?: Maybe<Scalars["ID"]>;
    clientMutationId: Scalars["String"];
    /** The number of comments. Even though WPGraphQL denotes this field as an
     * integer, in WordPress this field should be saved as a numeric string for compatibility.
     */
    commentCount?: Maybe<Scalars["Int"]>;
    /** The comment status for the object */
    commentStatus?: Maybe<Scalars["String"]>;
    /** The content of the object */
    content?: Maybe<Scalars["String"]>;
    /** The date of the object. Preferable to enter as year/month/day (e.g.
     * 01/31/2017) as it will rearrange date as fit if it is not specified.
     * Incomplete dates may have unintended results for example, "2017" as the input
     * will use current date with timestamp 20:17
     */
    date?: Maybe<Scalars["String"]>;
    /** The excerpt of the object */
    excerpt?: Maybe<Scalars["String"]>;
    /** A field used for ordering posts. This is typically used with nav menu items or
     * for special ordering of hierarchical content types.
     */
    menuOrder?: Maybe<Scalars["Int"]>;
    /** If the post is an attachment or a media file, this field will carry the
     * corresponding MIME type. This field is equivalent to the value of
     * WP_Post->post_mime_type and the post_mime_type column in the "post_objects"
     * database table.
     */
    mimeType?: Maybe<MimeTypeEnum>;
    /** The ID of the parent object */
    parentId?: Maybe<Scalars["ID"]>;
    /** The password used to protect the content of the object */
    password?: Maybe<Scalars["String"]>;
    /** URLs that have been pinged. */
    pinged?: Maybe<Array<Maybe<Scalars["String"]>>>;
    /** The ping status for the object */
    pingStatus?: Maybe<Scalars["String"]>;
    /** The slug of the object */
    slug?: Maybe<Scalars["String"]>;
    /** The status of the object */
    status?: Maybe<PostStatusEnum>;
    /** The title of the post */
    title?: Maybe<Scalars["String"]>;
    /** URLs queued to be pinged. */
    toPing?: Maybe<Array<Maybe<Scalars["String"]>>>;
};

/** The payload for the createPage mutation */
export type CreatePagePayload = {
    clientMutationId: Scalars["String"];
    page?: Maybe<Page>;
};

/** Input for the createPost mutation */
export type CreatePostInput = {
    /** The userId to assign as the author of the post */
    authorId?: Maybe<Scalars["ID"]>;
    /** Set connections between the post and categories */
    categories?: Maybe<PostCategoriesInput>;
    clientMutationId: Scalars["String"];
    /** The number of comments. Even though WPGraphQL denotes this field as an
     * integer, in WordPress this field should be saved as a numeric string for compatibility.
     */
    commentCount?: Maybe<Scalars["Int"]>;
    /** The comment status for the object */
    commentStatus?: Maybe<Scalars["String"]>;
    /** The content of the object */
    content?: Maybe<Scalars["String"]>;
    /** The date of the object. Preferable to enter as year/month/day (e.g.
     * 01/31/2017) as it will rearrange date as fit if it is not specified.
     * Incomplete dates may have unintended results for example, "2017" as the input
     * will use current date with timestamp 20:17
     */
    date?: Maybe<Scalars["String"]>;
    /** The excerpt of the object */
    excerpt?: Maybe<Scalars["String"]>;
    /** A field used for ordering posts. This is typically used with nav menu items or
     * for special ordering of hierarchical content types.
     */
    menuOrder?: Maybe<Scalars["Int"]>;
    /** If the post is an attachment or a media file, this field will carry the
     * corresponding MIME type. This field is equivalent to the value of
     * WP_Post->post_mime_type and the post_mime_type column in the "post_objects"
     * database table.
     */
    mimeType?: Maybe<MimeTypeEnum>;
    /** The ID of the parent object */
    parentId?: Maybe<Scalars["ID"]>;
    /** The password used to protect the content of the object */
    password?: Maybe<Scalars["String"]>;
    /** URLs that have been pinged. */
    pinged?: Maybe<Array<Maybe<Scalars["String"]>>>;
    /** The ping status for the object */
    pingStatus?: Maybe<Scalars["String"]>;
    /** The slug of the object */
    slug?: Maybe<Scalars["String"]>;
    /** The status of the object */
    status?: Maybe<PostStatusEnum>;
    /** Set connections between the post and tags */
    tags?: Maybe<PostTagsInput>;
    /** The title of the post */
    title?: Maybe<Scalars["String"]>;
    /** URLs queued to be pinged. */
    toPing?: Maybe<Array<Maybe<Scalars["String"]>>>;
};

/** The payload for the createPost mutation */
export type CreatePostPayload = {
    clientMutationId: Scalars["String"];
    post?: Maybe<Post>;
};

/** Input for the createTag mutation */
export type CreateTagInput = {
    /** The slug that the post_tag will be an alias of */
    aliasOf?: Maybe<Scalars["String"]>;
    clientMutationId: Scalars["String"];
    /** The description of the post_tag object */
    description?: Maybe<Scalars["String"]>;
    /** The name of the post_tag object to mutate */
    name: Scalars["String"];
    /** If this argument exists then the slug will be checked to see if it is not an
     * existing valid term. If that check succeeds (it is not a valid term), then it
     * is added and the term id is given. If it fails, then a check is made to
     * whether the taxonomy is hierarchical and the parent argument is not empty. If
     * the second check succeeds, the term will be inserted and the term id will be
     * given. If the slug argument is empty, then it will be calculated from the term name.
     */
    slug?: Maybe<Scalars["String"]>;
};

/** The payload for the createTag mutation */
export type CreateTagPayload = {
    clientMutationId: Scalars["String"];
    /** The created post_tag */
    tag?: Maybe<Tag>;
};

/** Input for the createUser mutation */
export type CreateUserInput = {
    /** User's AOL IM account. */
    aim?: Maybe<Scalars["String"]>;
    clientMutationId: Scalars["String"];
    /** A string containing content about the user. */
    description?: Maybe<Scalars["String"]>;
    /** A string that will be shown on the site. Defaults to user's username. It is
     * likely that you will want to change this, for both appearance and security
     * through obscurity (that is if you dont use and delete the default admin user).
     */
    displayName?: Maybe<Scalars["String"]>;
    /** A string containing the user's email address. */
    email?: Maybe<Scalars["String"]>;
    /** 	The user's first name. */
    firstName?: Maybe<Scalars["String"]>;
    /** User's Jabber account. */
    jabber?: Maybe<Scalars["String"]>;
    /** The user's last name. */
    lastName?: Maybe<Scalars["String"]>;
    /** User's locale. */
    locale?: Maybe<Scalars["String"]>;
    /** A string that contains a URL-friendly name for the user. The default is the user's username. */
    nicename?: Maybe<Scalars["String"]>;
    /** The user's nickname, defaults to the user's username. */
    nickname?: Maybe<Scalars["String"]>;
    /** A string that contains the plain text password for the user. */
    password?: Maybe<Scalars["String"]>;
    /** The date the user registered. Format is Y-m-d H:i:s. */
    registered?: Maybe<Scalars["String"]>;
    /** A string for whether to enable the rich editor or not. False if not empty. */
    richEditing?: Maybe<Scalars["String"]>;
    /** An array of roles to be assigned to the user. */
    roles?: Maybe<Array<Maybe<Scalars["String"]>>>;
    /** A string that contains the user's username for logging in. */
    username: Scalars["String"];
    /** A string containing the user's URL for the user's web site. */
    websiteUrl?: Maybe<Scalars["String"]>;
    /** User's Yahoo IM account. */
    yim?: Maybe<Scalars["String"]>;
};

/** The payload for the createUser mutation */
export type CreateUserPayload = {
    clientMutationId: Scalars["String"];
    user?: Maybe<User>;
};

/** Date values */
export type DateInput = {
    /** Day of the month (from 1 to 31) */
    day?: Maybe<Scalars["Int"]>;
    /** Month number (from 1 to 12) */
    month?: Maybe<Scalars["Int"]>;
    /** 4 digit year (e.g. 2017) */
    year?: Maybe<Scalars["Int"]>;
};

/** Filter the connection based on input */
export type DateQueryInput = {
    after?: Maybe<DateInput>;
    before?: Maybe<DateInput>;
    /** Column to query against */
    column?: Maybe<PostObjectsConnectionDateColumnEnum>;
    /** For after/before, whether exact value should be matched or not */
    compare?: Maybe<Scalars["String"]>;
    /** Day of the month (from 1 to 31) */
    day?: Maybe<Scalars["Int"]>;
    /** Hour (from 0 to 23) */
    hour?: Maybe<Scalars["Int"]>;
    /** For after/before, whether exact value should be matched or not */
    inclusive?: Maybe<Scalars["Boolean"]>;
    /** Minute (from 0 to 59) */
    minute?: Maybe<Scalars["Int"]>;
    /** Month number (from 1 to 12) */
    month?: Maybe<Scalars["Int"]>;
    /** OR or AND, how the sub-arrays should be compared */
    relation?: Maybe<RelationEnum>;
    /** Second (0 to 59) */
    second?: Maybe<Scalars["Int"]>;
    /** Week of the year (from 0 to 53) */
    week?: Maybe<Scalars["Int"]>;
    /** 4 digit year (e.g. 2017) */
    year?: Maybe<Scalars["Int"]>;
};

/** Input for the deleteCategory mutation */
export type DeleteCategoryInput = {
    clientMutationId: Scalars["String"];
    /** The ID of the category to delete */
    id: Scalars["ID"];
};

/** The payload for the deleteCategory mutation */
export type DeleteCategoryPayload = {
    /** The deteted term object */
    category?: Maybe<Category>;
    clientMutationId: Scalars["String"];
    /** The ID of the deleted object */
    deletedId?: Maybe<Scalars["ID"]>;
};

/** Input for the deleteComment mutation */
export type DeleteCommentInput = {
    clientMutationId: Scalars["String"];
    /** Whether the comment should be force deleted instead of being moved to the trash */
    forceDelete?: Maybe<Scalars["Boolean"]>;
    /** The deleted comment ID */
    id: Scalars["ID"];
};

/** The payload for the deleteComment mutation */
export type DeleteCommentPayload = {
    clientMutationId: Scalars["String"];
    /** The deleted comment object */
    comment?: Maybe<Comment>;
    /** The deleted comment ID */
    deletedId?: Maybe<Scalars["ID"]>;
};

/** Input for the deleteDemo mutation */
export type DeleteDemoInput = {
    clientMutationId: Scalars["String"];
    /** Whether the object should be force deleted instead of being moved to the trash */
    forceDelete?: Maybe<Scalars["Boolean"]>;
    /** The ID of the demo to delete */
    id: Scalars["ID"];
};

/** The payload for the deleteDemo mutation */
export type DeleteDemoPayload = {
    clientMutationId: Scalars["String"];
    /** The ID of the deleted object */
    deletedId?: Maybe<Scalars["ID"]>;
    /** The object before it was deleted */
    demo?: Maybe<Demo>;
};

/** Input for the deleteMediaItem mutation */
export type DeleteMediaItemInput = {
    clientMutationId: Scalars["String"];
    /** Whether the mediaItem should be force deleted instead of being moved to the trash */
    forceDelete?: Maybe<Scalars["Boolean"]>;
    /** The ID of the mediaItem to delete */
    id: Scalars["ID"];
};

/** The payload for the deleteMediaItem mutation */
export type DeleteMediaItemPayload = {
    clientMutationId: Scalars["String"];
    /** The ID of the deleted mediaItem */
    deletedId?: Maybe<Scalars["ID"]>;
    /** The mediaItem before it was deleted */
    mediaItem?: Maybe<MediaItem>;
};

/** Input for the deletePage mutation */
export type DeletePageInput = {
    clientMutationId: Scalars["String"];
    /** Whether the object should be force deleted instead of being moved to the trash */
    forceDelete?: Maybe<Scalars["Boolean"]>;
    /** The ID of the page to delete */
    id: Scalars["ID"];
};

/** The payload for the deletePage mutation */
export type DeletePagePayload = {
    clientMutationId: Scalars["String"];
    /** The ID of the deleted object */
    deletedId?: Maybe<Scalars["ID"]>;
    /** The object before it was deleted */
    page?: Maybe<Page>;
};

/** Input for the deletePost mutation */
export type DeletePostInput = {
    clientMutationId: Scalars["String"];
    /** Whether the object should be force deleted instead of being moved to the trash */
    forceDelete?: Maybe<Scalars["Boolean"]>;
    /** The ID of the post to delete */
    id: Scalars["ID"];
};

/** The payload for the deletePost mutation */
export type DeletePostPayload = {
    clientMutationId: Scalars["String"];
    /** The ID of the deleted object */
    deletedId?: Maybe<Scalars["ID"]>;
    /** The object before it was deleted */
    post?: Maybe<Post>;
};

/** Input for the deleteRevision mutation */
export type DeleteRevisionInput = {
    clientMutationId: Scalars["String"];
    /** Whether the object should be force deleted instead of being moved to the trash */
    forceDelete?: Maybe<Scalars["Boolean"]>;
    /** The ID of the revision to delete */
    id: Scalars["ID"];
};

/** The payload for the deleteRevision mutation */
export type DeleteRevisionPayload = {
    clientMutationId: Scalars["String"];
    /** The ID of the deleted object */
    deletedId?: Maybe<Scalars["ID"]>;
    /** The object before it was deleted */
    revision?: Maybe<Revision>;
};

/** Input for the deleteTag mutation */
export type DeleteTagInput = {
    clientMutationId: Scalars["String"];
    /** The ID of the tag to delete */
    id: Scalars["ID"];
};

/** The payload for the deleteTag mutation */
export type DeleteTagPayload = {
    clientMutationId: Scalars["String"];
    /** The ID of the deleted object */
    deletedId?: Maybe<Scalars["ID"]>;
    /** The deteted term object */
    tag?: Maybe<Tag>;
};

/** Input for the deleteUser mutation */
export type DeleteUserInput = {
    clientMutationId: Scalars["String"];
    /** The ID of the user you want to delete */
    id: Scalars["ID"];
    /** Reassign posts and links to new User ID. */
    reassignId?: Maybe<Scalars["ID"]>;
};

/** The payload for the deleteUser mutation */
export type DeleteUserPayload = {
    clientMutationId: Scalars["String"];
    /** The ID of the user that you just deleted */
    deletedId?: Maybe<Scalars["ID"]>;
    /** The deleted user object */
    user?: Maybe<User>;
};

/** The demo type */
export type Demo = Node & {
    /** Ancestors of the object */
    ancestors?: Maybe<Array<Maybe<PostObjectUnion>>>;
    /** The author field will return a queryable User type matching the post&#039;s author. */
    author?: Maybe<User>;
    /** Whether the comments are open or closed for this particular post. */
    commentStatus?: Maybe<Scalars["String"]>;
    /** The content of the post. */
    content?: Maybe<Scalars["String"]>;
    /** Post publishing date. */
    date?: Maybe<Scalars["String"]>;
    /** The publishing date set in GMT. */
    dateGmt?: Maybe<Scalars["String"]>;
    /** The id field matches the WP_Post-&gt;ID field. */
    demoId: Scalars["Int"];
    /** The desired slug of the post */
    desiredSlug?: Maybe<Scalars["String"]>;
    /** The user that most recently edited the object */
    editLast?: Maybe<User>;
    /** If a user has edited the object within the past 15 seconds, this will return
     * the user and the time they last edited. Null if the edit lock doesn&#039;t
     * exist or is greater than 15 seconds
     */
    editLock?: Maybe<EditLock>;
    /** The RSS enclosure for the object */
    enclosure?: Maybe<Scalars["String"]>;
    /** The excerpt of the post. */
    excerpt?: Maybe<Scalars["String"]>;
    /** The global unique identifier for this post. This currently matches the value
     * stored in WP_Post-&gt;guid and the guid column in the &quot;post_objects&quot;
     * database table.
     */
    guid?: Maybe<Scalars["String"]>;
    /** The globally unique ID for the object */
    id: Scalars["ID"];
    /** The permalink of the post */
    link?: Maybe<Scalars["String"]>;
    /** A field used for ordering posts. This is typically used with nav menu items or
     * for special ordering of hierarchical content types.
     */
    menuOrder?: Maybe<Scalars["Int"]>;
    /** The local modified time for a post. If a post was recently updated the
     * modified field will change to match the corresponding time.
     */
    modified?: Maybe<Scalars["String"]>;
    /** The GMT modified time for a post. If a post was recently updated the modified
     * field will change to match the corresponding time in GMT.
     */
    modifiedGmt?: Maybe<Scalars["String"]>;
    /** The parent of the object. The parent object can be of various types */
    parent?: Maybe<PostObjectUnion>;
    /** URLs that have been pinged. */
    pinged?: Maybe<Array<Maybe<Scalars["String"]>>>;
    /** Whether the pings are open or closed for this particular post. */
    pingStatus?: Maybe<Scalars["String"]>;
    /** Demo price */
    price?: Maybe<Scalars["Int"]>;
    /** The uri slug for the post. This is equivalent to the WP_Post-&gt;post_name
     * field and the post_name column in the database for the
     * &quot;post_objects&quot; table.
     */
    slug?: Maybe<Scalars["String"]>;
    /** The current status of the object */
    status?: Maybe<Scalars["String"]>;
    /** Terms connected to the demo */
    termNames?: Maybe<Array<Maybe<Scalars["String"]>>>;
    /** Terms connected to the demo */
    terms?: Maybe<Array<Maybe<TermObjectUnion>>>;
    /** Terms connected to the demo */
    termSlugs?: Maybe<Array<Maybe<Scalars["String"]>>>;
    /** The title of the post. This is currently just the raw title. An amendment to support rendered title needs to be made. */
    title?: Maybe<Scalars["String"]>;
    /** URLs queued to be pinged. */
    toPing?: Maybe<Array<Maybe<Scalars["String"]>>>;
    /** URI path for the resource */
    uri?: Maybe<Scalars["String"]>;
    /** The WordPress post type info object. Schema extension by WPNext. */
    wpNextPostTypeInfo: WpNextPostType;
};

/** The demo type */
export type DemoAncestorsArgs = {
    types?: Maybe<Array<Maybe<PostTypeEnum>>>;
};

/** The demo type */
export type DemoContentArgs = {
    format?: Maybe<PostObjectFieldFormatEnum>;
};

/** The demo type */
export type DemoExcerptArgs = {
    format?: Maybe<PostObjectFieldFormatEnum>;
};

/** The demo type */
export type DemoTermNamesArgs = {
    taxonomies?: Maybe<Array<Maybe<TaxonomyEnum>>>;
};

/** The demo type */
export type DemoTermsArgs = {
    taxonomies?: Maybe<Array<Maybe<TaxonomyEnum>>>;
};

/** The demo type */
export type DemoTermSlugsArgs = {
    taxonomies?: Maybe<Array<Maybe<TaxonomyEnum>>>;
};

/** The demo type */
export type DemoTitleArgs = {
    format?: Maybe<PostObjectFieldFormatEnum>;
};

/** The discussion setting type */
export type DiscussionSettings = {
    /** Allow people to post comments on new articles. */
    defaultCommentStatus?: Maybe<Scalars["String"]>;
    /** Allow link notifications from other blogs (pingbacks and trackbacks) on new articles. */
    defaultPingStatus?: Maybe<Scalars["String"]>;
};

/** Info on whether the object is locked by another user editing it */
export type EditLock = {
    /** The time when the object was last edited */
    editTime?: Maybe<Scalars["String"]>;
    /** The user that most recently edited the object */
    user?: Maybe<User>;
};

/** The general setting type */
export type GeneralSettings = {
    /** A date format for all date strings. */
    dateFormat?: Maybe<Scalars["String"]>;
    /** Site tagline. */
    description?: Maybe<Scalars["String"]>;
    /** This address is used for admin purposes, like new user notification. */
    email?: Maybe<Scalars["String"]>;
    /** WordPress locale code. */
    language?: Maybe<Scalars["String"]>;
    /** A day number of the week that the week should start on. */
    startOfWeek?: Maybe<Scalars["Int"]>;
    /** A time format for all time strings. */
    timeFormat?: Maybe<Scalars["String"]>;
    /** A city in the same timezone as you. */
    timezone?: Maybe<Scalars["String"]>;
    /** Site title. */
    title?: Maybe<Scalars["String"]>;
    /** Site URL. */
    url?: Maybe<Scalars["String"]>;
};

/** File details for a Media Item */
export type MediaDetails = {
    /** The height of the mediaItem */
    file?: Maybe<Scalars["String"]>;
    /** The height of the mediaItem */
    height?: Maybe<Scalars["Int"]>;
    meta?: Maybe<MediaItemMeta>;
    /** The available sizes of the mediaItem */
    sizes?: Maybe<Array<Maybe<MediaSize>>>;
    /** The width of the mediaItem */
    width?: Maybe<Scalars["Int"]>;
};

/** The mediaItem type */
export type MediaItem = Node & {
    /** Alternative text to display when resource is not displayed */
    altText?: Maybe<Scalars["String"]>;
    /** Ancestors of the object */
    ancestors?: Maybe<Array<Maybe<PostObjectUnion>>>;
    /** The author field will return a queryable User type matching the post&#039;s author. */
    author?: Maybe<User>;
    /** The caption for the resource */
    caption?: Maybe<Scalars["String"]>;
    /** The number of comments. Even though WPGraphQL denotes this field as an
     * integer, in WordPress this field should be saved as a numeric string for compatibility.
     */
    commentCount?: Maybe<Scalars["Int"]>;
    /** Connection between the mediaItem type and the mediaItem type */
    comments?: Maybe<MediaItemToCommentConnection>;
    /** Whether the comments are open or closed for this particular post. */
    commentStatus?: Maybe<Scalars["String"]>;
    /** The content of the post. */
    content?: Maybe<Scalars["String"]>;
    /** Post publishing date. */
    date?: Maybe<Scalars["String"]>;
    /** The publishing date set in GMT. */
    dateGmt?: Maybe<Scalars["String"]>;
    /** Description of the image (stored as post_content) */
    description?: Maybe<Scalars["String"]>;
    /** The desired slug of the post */
    desiredSlug?: Maybe<Scalars["String"]>;
    /** The user that most recently edited the object */
    editLast?: Maybe<User>;
    /** If a user has edited the object within the past 15 seconds, this will return
     * the user and the time they last edited. Null if the edit lock doesn&#039;t
     * exist or is greater than 15 seconds
     */
    editLock?: Maybe<EditLock>;
    /** The RSS enclosure for the object */
    enclosure?: Maybe<Scalars["String"]>;
    /** The excerpt of the post. */
    excerpt?: Maybe<Scalars["String"]>;
    /** The global unique identifier for this post. This currently matches the value
     * stored in WP_Post-&gt;guid and the guid column in the &quot;post_objects&quot;
     * database table.
     */
    guid?: Maybe<Scalars["String"]>;
    /** The globally unique ID for the object */
    id: Scalars["ID"];
    /** The permalink of the post */
    link?: Maybe<Scalars["String"]>;
    /** Details about the mediaItem */
    mediaDetails?: Maybe<MediaDetails>;
    /** Type of resource */
    mediaType?: Maybe<Scalars["String"]>;
    /** The id field matches the WP_Post-&gt;ID field. */
    mediaItemId: Scalars["Int"];
    /** A field used for ordering posts. This is typically used with nav menu items or
     * for special ordering of hierarchical content types.
     */
    menuOrder?: Maybe<Scalars["Int"]>;
    /** The mime type of the mediaItem */
    mimeType?: Maybe<Scalars["String"]>;
    /** The local modified time for a post. If a post was recently updated the
     * modified field will change to match the corresponding time.
     */
    modified?: Maybe<Scalars["String"]>;
    /** The GMT modified time for a post. If a post was recently updated the modified
     * field will change to match the corresponding time in GMT.
     */
    modifiedGmt?: Maybe<Scalars["String"]>;
    /** The parent of the object. The parent object can be of various types */
    parent?: Maybe<PostObjectUnion>;
    /** URLs that have been pinged. */
    pinged?: Maybe<Array<Maybe<Scalars["String"]>>>;
    /** Whether the pings are open or closed for this particular post. */
    pingStatus?: Maybe<Scalars["String"]>;
    /** The uri slug for the post. This is equivalent to the WP_Post-&gt;post_name
     * field and the post_name column in the database for the
     * &quot;post_objects&quot; table.
     */
    slug?: Maybe<Scalars["String"]>;
    /** Url of the mediaItem */
    sourceUrl?: Maybe<Scalars["String"]>;
    /** The current status of the object */
    status?: Maybe<Scalars["String"]>;
    /** Terms connected to the mediaItem */
    termNames?: Maybe<Array<Maybe<Scalars["String"]>>>;
    /** Terms connected to the mediaItem */
    terms?: Maybe<Array<Maybe<TermObjectUnion>>>;
    /** Terms connected to the mediaItem */
    termSlugs?: Maybe<Array<Maybe<Scalars["String"]>>>;
    /** The title of the post. This is currently just the raw title. An amendment to support rendered title needs to be made. */
    title?: Maybe<Scalars["String"]>;
    /** URLs queued to be pinged. */
    toPing?: Maybe<Array<Maybe<Scalars["String"]>>>;
    /** URI path for the resource */
    uri?: Maybe<Scalars["String"]>;
    /** The WordPress post type info object. Schema extension by WPNext. */
    wpNextPostTypeInfo: WpNextPostType;
};

/** The mediaItem type */
export type MediaItemAncestorsArgs = {
    types?: Maybe<Array<Maybe<PostTypeEnum>>>;
};

/** The mediaItem type */
export type MediaItemCommentsArgs = {
    first?: Maybe<Scalars["Int"]>;
    last?: Maybe<Scalars["Int"]>;
    after?: Maybe<Scalars["String"]>;
    before?: Maybe<Scalars["String"]>;
    where?: Maybe<MediaItemToCommentConnectionWhereArgs>;
};

/** The mediaItem type */
export type MediaItemContentArgs = {
    format?: Maybe<PostObjectFieldFormatEnum>;
};

/** The mediaItem type */
export type MediaItemExcerptArgs = {
    format?: Maybe<PostObjectFieldFormatEnum>;
};

/** The mediaItem type */
export type MediaItemSourceUrlArgs = {
    size?: Maybe<MediaItemSizeEnum>;
};

/** The mediaItem type */
export type MediaItemTermNamesArgs = {
    taxonomies?: Maybe<Array<Maybe<TaxonomyEnum>>>;
};

/** The mediaItem type */
export type MediaItemTermsArgs = {
    taxonomies?: Maybe<Array<Maybe<TaxonomyEnum>>>;
};

/** The mediaItem type */
export type MediaItemTermSlugsArgs = {
    taxonomies?: Maybe<Array<Maybe<TaxonomyEnum>>>;
};

/** The mediaItem type */
export type MediaItemTitleArgs = {
    format?: Maybe<PostObjectFieldFormatEnum>;
};

/** Meta connected to a MediaItem */
export type MediaItemMeta = {
    aperture?: Maybe<Scalars["Float"]>;
    camera?: Maybe<Scalars["String"]>;
    caption?: Maybe<Scalars["String"]>;
    copyright?: Maybe<Scalars["String"]>;
    createdTimestamp?: Maybe<Scalars["Int"]>;
    credit?: Maybe<Scalars["String"]>;
    focalLength?: Maybe<Scalars["Int"]>;
    iso?: Maybe<Scalars["Int"]>;
    keywords?: Maybe<Array<Maybe<Scalars["String"]>>>;
    orientation?: Maybe<Scalars["String"]>;
    shutterSpeed?: Maybe<Scalars["Float"]>;
    title?: Maybe<Scalars["String"]>;
};

/** The size of the media item object. */
export enum MediaItemSizeEnum {
    /** MediaItem with the large size */
    Large = "LARGE",
    /** MediaItem with the medium size */
    Medium = "MEDIUM",
    /** MediaItem with the medium_large size */
    Medium_Large = "MEDIUM_LARGE",
    /** MediaItem with the thumbnail size */
    Thumbnail = "THUMBNAIL",
}

/** The status of the media item object. */
export enum MediaItemStatusEnum {
    /** Objects with the auto-draft status */
    Auto_Draft = "AUTO_DRAFT",
    /** Objects with the inherit status */
    Inherit = "INHERIT",
    /** Objects with the private status */
    Private = "PRIVATE",
    /** Objects with the trash status */
    Trash = "TRASH",
}

/** Connection between the mediaItem type and the mediaItem type */
export type MediaItemToCommentConnection = {
    /** Edges for the MediaItemToCommentConnection connection */
    edges?: Maybe<Array<Maybe<MediaItemToCommentConnectionEdge>>>;
    /** The nodes of the connection, without the edges */
    nodes?: Maybe<Array<Maybe<Comment>>>;
    /** Information about pagination in a connection. */
    pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type MediaItemToCommentConnectionEdge = {
    /** A cursor for use in pagination */
    cursor?: Maybe<Scalars["String"]>;
    /** The item at the end of the edge */
    node?: Maybe<Comment>;
};

/** Arguments for filtering the MediaItemToCommentConnection connection */
export type MediaItemToCommentConnectionWhereArgs = {
    /** Comment author email address. */
    authorEmail?: Maybe<Scalars["String"]>;
    /** Array of author IDs to include comments for. */
    authorIn?: Maybe<Array<Maybe<Scalars["ID"]>>>;
    /** Array of author IDs to exclude comments for. */
    authorNotIn?: Maybe<Array<Maybe<Scalars["ID"]>>>;
    /** Comment author URL. */
    authorUrl?: Maybe<Scalars["String"]>;
    /** Array of comment IDs to include. */
    commentIn?: Maybe<Array<Maybe<Scalars["ID"]>>>;
    /** Array of IDs of users whose unapproved comments will be returned by the
     * 							query regardless of status.
     */
    commentNotIn?: Maybe<Array<Maybe<Scalars["ID"]>>>;
    /** Include comments of a given type. */
    commentType?: Maybe<Scalars["String"]>;
    /** Include comments from a given array of comment types. */
    commentTypeIn?: Maybe<Array<Maybe<Scalars["String"]>>>;
    /** Exclude comments from a given array of comment types. */
    commentTypeNotIn?: Maybe<Scalars["String"]>;
    /** Content object author ID to limit results by. */
    contentAuthor?: Maybe<Array<Maybe<Scalars["ID"]>>>;
    /** Array of author IDs to retrieve comments for. */
    contentAuthorIn?: Maybe<Array<Maybe<Scalars["ID"]>>>;
    /** Array of author IDs *not* to retrieve comments for. */
    contentAuthorNotIn?: Maybe<Array<Maybe<Scalars["ID"]>>>;
    /** Limit results to those affiliated with a given content object
     * 							ID.
     */
    contentId?: Maybe<Scalars["ID"]>;
    /** Array of content object IDs to include affiliated comments
     * 							for.
     */
    contentIdIn?: Maybe<Array<Maybe<Scalars["ID"]>>>;
    /** Array of content object IDs to exclude affiliated comments
     * 							for.
     */
    contentIdNotIn?: Maybe<Array<Maybe<Scalars["ID"]>>>;
    /** Content object name to retrieve affiliated comments for. */
    contentName?: Maybe<Scalars["String"]>;
    /** Content Object parent ID to retrieve affiliated comments for. */
    contentParent?: Maybe<Scalars["Int"]>;
    /** Array of content object statuses to retrieve affiliated comments for.
     * 							Pass 'any' to match any value.
     */
    contentStatus?: Maybe<Array<Maybe<PostStatusEnum>>>;
    /** Content object type or array of types to retrieve affiliated comments for. Pass 'any' to match any value. */
    contentType?: Maybe<Array<Maybe<PostStatusEnum>>>;
    /** Array of author IDs to include comments for. */
    includeUnapproved?: Maybe<Array<Maybe<Scalars["ID"]>>>;
    /** Karma score to retrieve matching comments for. */
    karma?: Maybe<Scalars["Int"]>;
    /** The cardinality of the order of the connection */
    order?: Maybe<OrderEnum>;
    /** Field to order the comments by. */
    orderby?: Maybe<CommentsConnectionOrderbyEnum>;
    /** Parent ID of comment to retrieve children of. */
    parent?: Maybe<Scalars["Int"]>;
    /** Array of parent IDs of comments to retrieve children for. */
    parentIn?: Maybe<Array<Maybe<Scalars["ID"]>>>;
    /** Array of parent IDs of comments *not* to retrieve children
     * 							for.
     */
    parentNotIn?: Maybe<Array<Maybe<Scalars["ID"]>>>;
    /** Search term(s) to retrieve matching comments for. */
    search?: Maybe<Scalars["String"]>;
    /** Comment status to limit results by. */
    status?: Maybe<Scalars["String"]>;
    /** Include comments for a specific user ID. */
    userId?: Maybe<Scalars["ID"]>;
};

/** Details of an available size for a media item */
export type MediaSize = {
    /** The file of the for the referenced size */
    file?: Maybe<Scalars["String"]>;
    /** The height of the for the referenced size */
    height?: Maybe<Scalars["String"]>;
    /** The mime type of the resource */
    mimeType?: Maybe<Scalars["String"]>;
    /** The referenced size name */
    name?: Maybe<Scalars["String"]>;
    /** The url of the for the referenced size */
    sourceUrl?: Maybe<Scalars["String"]>;
    /** The width of the for the referenced size */
    width?: Maybe<Scalars["String"]>;
};

/** Menus are the containers for navigation items. Menus can be assigned to menu
 * locations, which are typically registered by the active theme.
 */
export type Menu = {
    /** The number of items in the menu */
    count?: Maybe<Scalars["Int"]>;
    /** ID of the nav menu. */
    id: Scalars["ID"];
    /** Connection between the Menu type and the Menu type */
    menuItems?: Maybe<MenuToMenuItemConnection>;
    /** WP ID of the nav menu. */
    menuId?: Maybe<Scalars["Int"]>;
    /** Display name of the menu. Equivalent to WP_Term-&gt;name. */
    name?: Maybe<Scalars["String"]>;
    /** The url friendly name of the menu. Equivalent to WP_Term-&gt;slug */
    slug?: Maybe<Scalars["String"]>;
};

/** Menus are the containers for navigation items. Menus can be assigned to menu
 * locations, which are typically registered by the active theme.
 */
export type MenuMenuItemsArgs = {
    first?: Maybe<Scalars["Int"]>;
    last?: Maybe<Scalars["Int"]>;
    after?: Maybe<Scalars["String"]>;
    before?: Maybe<Scalars["String"]>;
    where?: Maybe<MenuToMenuItemConnectionWhereArgs>;
};

/** Navigation menu items are the individual items assigned to a menu. These are rendered as the links in a navigation menu. */
export type MenuItem = {
    /** Connection between the MenuItem type and the MenuItem type */
    childItems?: Maybe<MenuItemToMenuItemConnection>;
    /** The object connected to this menu item. */
    connectedObject?: Maybe<MenuItemObjectUnion>;
    /** Class attribute for the menu item link */
    cssClasses?: Maybe<Array<Maybe<Scalars["String"]>>>;
    /** Description of the menu item. */
    description?: Maybe<Scalars["String"]>;
    /** Relay ID of the menu item. */
    id: Scalars["ID"];
    /** Label or title of the menu item. */
    label?: Maybe<Scalars["String"]>;
    /** Link relationship (XFN) of the menu item. */
    linkRelationship?: Maybe<Scalars["String"]>;
    /** WP ID of the menu item. */
    menuItemId?: Maybe<Scalars["Int"]>;
    /** Target attribute for the menu item link. */
    target?: Maybe<Scalars["String"]>;
    /** Title attribute for the menu item link */
    title?: Maybe<Scalars["String"]>;
    /** URL or destination of the menu item. */
    url?: Maybe<Scalars["String"]>;
};

/** Navigation menu items are the individual items assigned to a menu. These are rendered as the links in a navigation menu. */
export type MenuItemChildItemsArgs = {
    first?: Maybe<Scalars["Int"]>;
    last?: Maybe<Scalars["Int"]>;
    after?: Maybe<Scalars["String"]>;
    before?: Maybe<Scalars["String"]>;
    where?: Maybe<MenuItemToMenuItemConnectionWhereArgs>;
};

export type MenuItemObjectUnion =
    | Post
    | Page
    | Demo
    | Category
    | Tag
    | MenuItem;

/** Connection between the MenuItem type and the MenuItem type */
export type MenuItemToMenuItemConnection = {
    /** Edges for the MenuItemToMenuItemConnection connection */
    edges?: Maybe<Array<Maybe<MenuItemToMenuItemConnectionEdge>>>;
    /** The nodes of the connection, without the edges */
    nodes?: Maybe<Array<Maybe<MenuItem>>>;
    /** Information about pagination in a connection. */
    pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type MenuItemToMenuItemConnectionEdge = {
    /** A cursor for use in pagination */
    cursor?: Maybe<Scalars["String"]>;
    /** The item at the end of the edge */
    node?: Maybe<MenuItem>;
};

/** Arguments for filtering the MenuItemToMenuItemConnection connection */
export type MenuItemToMenuItemConnectionWhereArgs = {
    /** The ID of the object */
    id?: Maybe<Scalars["Int"]>;
    /** The menu location for the menu being queried */
    location?: Maybe<MenuLocationEnum>;
};

/** Registered menu locations */
export enum MenuLocationEnum {
    Top_Menu = "TOP_MENU",
}

/** Connection between the Menu type and the Menu type */
export type MenuToMenuItemConnection = {
    /** Edges for the MenuToMenuItemConnection connection */
    edges?: Maybe<Array<Maybe<MenuToMenuItemConnectionEdge>>>;
    /** The nodes of the connection, without the edges */
    nodes?: Maybe<Array<Maybe<MenuItem>>>;
    /** Information about pagination in a connection. */
    pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type MenuToMenuItemConnectionEdge = {
    /** A cursor for use in pagination */
    cursor?: Maybe<Scalars["String"]>;
    /** The item at the end of the edge */
    node?: Maybe<MenuItem>;
};

/** Arguments for filtering the MenuToMenuItemConnection connection */
export type MenuToMenuItemConnectionWhereArgs = {
    /** The ID of the object */
    id?: Maybe<Scalars["Int"]>;
    /** The menu location for the menu being queried */
    location?: Maybe<MenuLocationEnum>;
};

/** The MimeType of the object */
export enum MimeTypeEnum {
    Application_Java = "APPLICATION_JAVA",
    Application_Msword = "APPLICATION_MSWORD",
    Application_Octet_Stream = "APPLICATION_OCTET_STREAM",
    Application_Onenote = "APPLICATION_ONENOTE",
    Application_Oxps = "APPLICATION_OXPS",
    Application_Pdf = "APPLICATION_PDF",
    Application_Rar = "APPLICATION_RAR",
    Application_Rtf = "APPLICATION_RTF",
    Application_Ttaf_Xml = "APPLICATION_TTAF_XML",
    Application_Vnd_Apple_Keynote = "APPLICATION_VND_APPLE_KEYNOTE",
    Application_Vnd_Apple_Numbers = "APPLICATION_VND_APPLE_NUMBERS",
    Application_Vnd_Apple_Pages = "APPLICATION_VND_APPLE_PAGES",
    Application_Vnd_Ms_Access = "APPLICATION_VND_MS_ACCESS",
    Application_Vnd_Ms_Excel = "APPLICATION_VND_MS_EXCEL",
    Application_Vnd_Ms_Excel_Addin_Macroenabled_12 = "APPLICATION_VND_MS_EXCEL_ADDIN_MACROENABLED_12",
    Application_Vnd_Ms_Excel_Sheet_Binary_Macroenabled_12 = "APPLICATION_VND_MS_EXCEL_SHEET_BINARY_MACROENABLED_12",
    Application_Vnd_Ms_Excel_Sheet_Macroenabled_12 = "APPLICATION_VND_MS_EXCEL_SHEET_MACROENABLED_12",
    Application_Vnd_Ms_Excel_Template_Macroenabled_12 = "APPLICATION_VND_MS_EXCEL_TEMPLATE_MACROENABLED_12",
    Application_Vnd_Ms_Powerpoint = "APPLICATION_VND_MS_POWERPOINT",
    Application_Vnd_Ms_Powerpoint_Addin_Macroenabled_12 = "APPLICATION_VND_MS_POWERPOINT_ADDIN_MACROENABLED_12",
    Application_Vnd_Ms_Powerpoint_Presentation_Macroenabled_12 = "APPLICATION_VND_MS_POWERPOINT_PRESENTATION_MACROENABLED_12",
    Application_Vnd_Ms_Powerpoint_Slideshow_Macroenabled_12 = "APPLICATION_VND_MS_POWERPOINT_SLIDESHOW_MACROENABLED_12",
    Application_Vnd_Ms_Powerpoint_Slide_Macroenabled_12 = "APPLICATION_VND_MS_POWERPOINT_SLIDE_MACROENABLED_12",
    Application_Vnd_Ms_Powerpoint_Template_Macroenabled_12 = "APPLICATION_VND_MS_POWERPOINT_TEMPLATE_MACROENABLED_12",
    Application_Vnd_Ms_Project = "APPLICATION_VND_MS_PROJECT",
    Application_Vnd_Ms_Word_Document_Macroenabled_12 = "APPLICATION_VND_MS_WORD_DOCUMENT_MACROENABLED_12",
    Application_Vnd_Ms_Word_Template_Macroenabled_12 = "APPLICATION_VND_MS_WORD_TEMPLATE_MACROENABLED_12",
    Application_Vnd_Ms_Write = "APPLICATION_VND_MS_WRITE",
    Application_Vnd_Ms_Xpsdocument = "APPLICATION_VND_MS_XPSDOCUMENT",
    Application_Vnd_Oasis_Opendocument_Chart = "APPLICATION_VND_OASIS_OPENDOCUMENT_CHART",
    Application_Vnd_Oasis_Opendocument_Database = "APPLICATION_VND_OASIS_OPENDOCUMENT_DATABASE",
    Application_Vnd_Oasis_Opendocument_Formula = "APPLICATION_VND_OASIS_OPENDOCUMENT_FORMULA",
    Application_Vnd_Oasis_Opendocument_Graphics = "APPLICATION_VND_OASIS_OPENDOCUMENT_GRAPHICS",
    Application_Vnd_Oasis_Opendocument_Presentation = "APPLICATION_VND_OASIS_OPENDOCUMENT_PRESENTATION",
    Application_Vnd_Oasis_Opendocument_Spreadsheet = "APPLICATION_VND_OASIS_OPENDOCUMENT_SPREADSHEET",
    Application_Vnd_Oasis_Opendocument_Text = "APPLICATION_VND_OASIS_OPENDOCUMENT_TEXT",
    Application_Vnd_Openxmlformats_Officedocument_Presentationml_Presentation = "APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_PRESENTATIONML_PRESENTATION",
    Application_Vnd_Openxmlformats_Officedocument_Presentationml_Slide = "APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_PRESENTATIONML_SLIDE",
    Application_Vnd_Openxmlformats_Officedocument_Presentationml_Slideshow = "APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_PRESENTATIONML_SLIDESHOW",
    Application_Vnd_Openxmlformats_Officedocument_Presentationml_Template = "APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_PRESENTATIONML_TEMPLATE",
    Application_Vnd_Openxmlformats_Officedocument_Spreadsheetml_Sheet = "APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_SPREADSHEETML_SHEET",
    Application_Vnd_Openxmlformats_Officedocument_Spreadsheetml_Template = "APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_SPREADSHEETML_TEMPLATE",
    Application_Vnd_Openxmlformats_Officedocument_Wordprocessingml_Document = "APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_WORDPROCESSINGML_DOCUMENT",
    Application_Vnd_Openxmlformats_Officedocument_Wordprocessingml_Template = "APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_WORDPROCESSINGML_TEMPLATE",
    Application_Wordperfect = "APPLICATION_WORDPERFECT",
    Application_X_7Z_Compressed = "APPLICATION_X_7Z_COMPRESSED",
    Application_X_Gzip = "APPLICATION_X_GZIP",
    Application_X_Tar = "APPLICATION_X_TAR",
    Application_Zip = "APPLICATION_ZIP",
    Audio_Aac = "AUDIO_AAC",
    Audio_Flac = "AUDIO_FLAC",
    Audio_Midi = "AUDIO_MIDI",
    Audio_Mpeg = "AUDIO_MPEG",
    Audio_Ogg = "AUDIO_OGG",
    Audio_Wav = "AUDIO_WAV",
    Audio_X_Matroska = "AUDIO_X_MATROSKA",
    Audio_X_Ms_Wax = "AUDIO_X_MS_WAX",
    Audio_X_Ms_Wma = "AUDIO_X_MS_WMA",
    Audio_X_Realaudio = "AUDIO_X_REALAUDIO",
    Image_Bmp = "IMAGE_BMP",
    Image_Gif = "IMAGE_GIF",
    Image_Jpeg = "IMAGE_JPEG",
    Image_Png = "IMAGE_PNG",
    Image_Tiff = "IMAGE_TIFF",
    Image_X_Icon = "IMAGE_X_ICON",
    Text_Calendar = "TEXT_CALENDAR",
    Text_Css = "TEXT_CSS",
    Text_Csv = "TEXT_CSV",
    Text_Plain = "TEXT_PLAIN",
    Text_Richtext = "TEXT_RICHTEXT",
    Text_Tab_Separated_Values = "TEXT_TAB_SEPARATED_VALUES",
    Text_Vtt = "TEXT_VTT",
    Video_3Gpp = "VIDEO_3GPP",
    Video_3Gpp2 = "VIDEO_3GPP2",
    Video_Avi = "VIDEO_AVI",
    Video_Divx = "VIDEO_DIVX",
    Video_Mp4 = "VIDEO_MP4",
    Video_Mpeg = "VIDEO_MPEG",
    Video_Ogg = "VIDEO_OGG",
    Video_Quicktime = "VIDEO_QUICKTIME",
    Video_Webm = "VIDEO_WEBM",
    Video_X_Flv = "VIDEO_X_FLV",
    Video_X_Matroska = "VIDEO_X_MATROSKA",
    Video_X_Ms_Asf = "VIDEO_X_MS_ASF",
    Video_X_Ms_Wm = "VIDEO_X_MS_WM",
    Video_X_Ms_Wmv = "VIDEO_X_MS_WMV",
    Video_X_Ms_Wmx = "VIDEO_X_MS_WMX",
}

/** An object with an ID */
export type Node = {
    /** The id of the object */
    id: Scalars["ID"];
};

/** The cardinality of the connection order */
export enum OrderEnum {
    Asc = "ASC",
    Desc = "DESC",
}

/** The page type */
export type Page = Node & {
    /** Ancestors of the object */
    ancestors?: Maybe<Array<Maybe<PostObjectUnion>>>;
    /** The author field will return a queryable User type matching the post&#039;s author. */
    author?: Maybe<User>;
    /** Connection between the page type and the page type */
    childPages?: Maybe<PageToPageConnection>;
    /** The number of comments. Even though WPGraphQL denotes this field as an
     * integer, in WordPress this field should be saved as a numeric string for compatibility.
     */
    commentCount?: Maybe<Scalars["Int"]>;
    /** Connection between the page type and the page type */
    comments?: Maybe<PageToCommentConnection>;
    /** Whether the comments are open or closed for this particular post. */
    commentStatus?: Maybe<Scalars["String"]>;
    /** The content of the post. */
    content?: Maybe<Scalars["String"]>;
    /** Post publishing date. */
    date?: Maybe<Scalars["String"]>;
    /** The publishing date set in GMT. */
    dateGmt?: Maybe<Scalars["String"]>;
    /** The desired slug of the post */
    desiredSlug?: Maybe<Scalars["String"]>;
    /** The user that most recently edited the object */
    editLast?: Maybe<User>;
    /** If a user has edited the object within the past 15 seconds, this will return
     * the user and the time they last edited. Null if the edit lock doesn&#039;t
     * exist or is greater than 15 seconds
     */
    editLock?: Maybe<EditLock>;
    /** The RSS enclosure for the object */
    enclosure?: Maybe<Scalars["String"]>;
    /** The excerpt of the post. */
    excerpt?: Maybe<Scalars["String"]>;
    /** The featured image for the object */
    featuredImage?: Maybe<MediaItem>;
    /** The global unique identifier for this post. This currently matches the value
     * stored in WP_Post-&gt;guid and the guid column in the &quot;post_objects&quot;
     * database table.
     */
    guid?: Maybe<Scalars["String"]>;
    /** The globally unique ID for the object */
    id: Scalars["ID"];
    /** The permalink of the post */
    link?: Maybe<Scalars["String"]>;
    /** A field used for ordering posts. This is typically used with nav menu items or
     * for special ordering of hierarchical content types.
     */
    menuOrder?: Maybe<Scalars["Int"]>;
    /** The local modified time for a post. If a post was recently updated the
     * modified field will change to match the corresponding time.
     */
    modified?: Maybe<Scalars["String"]>;
    /** The GMT modified time for a post. If a post was recently updated the modified
     * field will change to match the corresponding time in GMT.
     */
    modifiedGmt?: Maybe<Scalars["String"]>;
    /** The id field matches the WP_Post-&gt;ID field. */
    pageId: Scalars["Int"];
    /** The parent of the object. The parent object can be of various types */
    parent?: Maybe<PostObjectUnion>;
    /** URLs that have been pinged. */
    pinged?: Maybe<Array<Maybe<Scalars["String"]>>>;
    /** Whether the pings are open or closed for this particular post. */
    pingStatus?: Maybe<Scalars["String"]>;
    /** The uri slug for the post. This is equivalent to the WP_Post-&gt;post_name
     * field and the post_name column in the database for the
     * &quot;post_objects&quot; table.
     */
    slug?: Maybe<Scalars["String"]>;
    /** The current status of the object */
    status?: Maybe<Scalars["String"]>;
    /** Terms connected to the page */
    termNames?: Maybe<Array<Maybe<Scalars["String"]>>>;
    /** Terms connected to the page */
    terms?: Maybe<Array<Maybe<TermObjectUnion>>>;
    /** Terms connected to the page */
    termSlugs?: Maybe<Array<Maybe<Scalars["String"]>>>;
    /** The title of the post. This is currently just the raw title. An amendment to support rendered title needs to be made. */
    title?: Maybe<Scalars["String"]>;
    /** URLs queued to be pinged. */
    toPing?: Maybe<Array<Maybe<Scalars["String"]>>>;
    /** URI path for the resource */
    uri?: Maybe<Scalars["String"]>;
    /** The WordPress post type info object. Schema extension by WPNext. */
    wpNextPostTypeInfo: WpNextPostType;
};

/** The page type */
export type PageAncestorsArgs = {
    types?: Maybe<Array<Maybe<PostTypeEnum>>>;
};

/** The page type */
export type PageChildPagesArgs = {
    first?: Maybe<Scalars["Int"]>;
    last?: Maybe<Scalars["Int"]>;
    after?: Maybe<Scalars["String"]>;
    before?: Maybe<Scalars["String"]>;
    where?: Maybe<PageToPageConnectionWhereArgs>;
};

/** The page type */
export type PageCommentsArgs = {
    first?: Maybe<Scalars["Int"]>;
    last?: Maybe<Scalars["Int"]>;
    after?: Maybe<Scalars["String"]>;
    before?: Maybe<Scalars["String"]>;
    where?: Maybe<PageToCommentConnectionWhereArgs>;
};

/** The page type */
export type PageContentArgs = {
    format?: Maybe<PostObjectFieldFormatEnum>;
};

/** The page type */
export type PageExcerptArgs = {
    format?: Maybe<PostObjectFieldFormatEnum>;
};

/** The page type */
export type PageTermNamesArgs = {
    taxonomies?: Maybe<Array<Maybe<TaxonomyEnum>>>;
};

/** The page type */
export type PageTermsArgs = {
    taxonomies?: Maybe<Array<Maybe<TaxonomyEnum>>>;
};

/** The page type */
export type PageTermSlugsArgs = {
    taxonomies?: Maybe<Array<Maybe<TaxonomyEnum>>>;
};

/** The page type */
export type PageTitleArgs = {
    format?: Maybe<PostObjectFieldFormatEnum>;
};

/** Connection between the page type and the page type */
export type PageToCommentConnection = {
    /** Edges for the PageToCommentConnection connection */
    edges?: Maybe<Array<Maybe<PageToCommentConnectionEdge>>>;
    /** The nodes of the connection, without the edges */
    nodes?: Maybe<Array<Maybe<Comment>>>;
    /** Information about pagination in a connection. */
    pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type PageToCommentConnectionEdge = {
    /** A cursor for use in pagination */
    cursor?: Maybe<Scalars["String"]>;
    /** The item at the end of the edge */
    node?: Maybe<Comment>;
};

/** Arguments for filtering the PageToCommentConnection connection */
export type PageToCommentConnectionWhereArgs = {
    /** Comment author email address. */
    authorEmail?: Maybe<Scalars["String"]>;
    /** Array of author IDs to include comments for. */
    authorIn?: Maybe<Array<Maybe<Scalars["ID"]>>>;
    /** Array of author IDs to exclude comments for. */
    authorNotIn?: Maybe<Array<Maybe<Scalars["ID"]>>>;
    /** Comment author URL. */
    authorUrl?: Maybe<Scalars["String"]>;
    /** Array of comment IDs to include. */
    commentIn?: Maybe<Array<Maybe<Scalars["ID"]>>>;
    /** Array of IDs of users whose unapproved comments will be returned by the
     * 							query regardless of status.
     */
    commentNotIn?: Maybe<Array<Maybe<Scalars["ID"]>>>;
    /** Include comments of a given type. */
    commentType?: Maybe<Scalars["String"]>;
    /** Include comments from a given array of comment types. */
    commentTypeIn?: Maybe<Array<Maybe<Scalars["String"]>>>;
    /** Exclude comments from a given array of comment types. */
    commentTypeNotIn?: Maybe<Scalars["String"]>;
    /** Content object author ID to limit results by. */
    contentAuthor?: Maybe<Array<Maybe<Scalars["ID"]>>>;
    /** Array of author IDs to retrieve comments for. */
    contentAuthorIn?: Maybe<Array<Maybe<Scalars["ID"]>>>;
    /** Array of author IDs *not* to retrieve comments for. */
    contentAuthorNotIn?: Maybe<Array<Maybe<Scalars["ID"]>>>;
    /** Limit results to those affiliated with a given content object
     * 							ID.
     */
    contentId?: Maybe<Scalars["ID"]>;
    /** Array of content object IDs to include affiliated comments
     * 							for.
     */
    contentIdIn?: Maybe<Array<Maybe<Scalars["ID"]>>>;
    /** Array of content object IDs to exclude affiliated comments
     * 							for.
     */
    contentIdNotIn?: Maybe<Array<Maybe<Scalars["ID"]>>>;
    /** Content object name to retrieve affiliated comments for. */
    contentName?: Maybe<Scalars["String"]>;
    /** Content Object parent ID to retrieve affiliated comments for. */
    contentParent?: Maybe<Scalars["Int"]>;
    /** Array of content object statuses to retrieve affiliated comments for.
     * 							Pass 'any' to match any value.
     */
    contentStatus?: Maybe<Array<Maybe<PostStatusEnum>>>;
    /** Content object type or array of types to retrieve affiliated comments for. Pass 'any' to match any value. */
    contentType?: Maybe<Array<Maybe<PostStatusEnum>>>;
    /** Array of author IDs to include comments for. */
    includeUnapproved?: Maybe<Array<Maybe<Scalars["ID"]>>>;
    /** Karma score to retrieve matching comments for. */
    karma?: Maybe<Scalars["Int"]>;
    /** The cardinality of the order of the connection */
    order?: Maybe<OrderEnum>;
    /** Field to order the comments by. */
    orderby?: Maybe<CommentsConnectionOrderbyEnum>;
    /** Parent ID of comment to retrieve children of. */
    parent?: Maybe<Scalars["Int"]>;
    /** Array of parent IDs of comments to retrieve children for. */
    parentIn?: Maybe<Array<Maybe<Scalars["ID"]>>>;
    /** Array of parent IDs of comments *not* to retrieve children
     * 							for.
     */
    parentNotIn?: Maybe<Array<Maybe<Scalars["ID"]>>>;
    /** Search term(s) to retrieve matching comments for. */
    search?: Maybe<Scalars["String"]>;
    /** Comment status to limit results by. */
    status?: Maybe<Scalars["String"]>;
    /** Include comments for a specific user ID. */
    userId?: Maybe<Scalars["ID"]>;
};

/** Connection between the page type and the page type */
export type PageToPageConnection = {
    /** Edges for the PageToPageConnection connection */
    edges?: Maybe<Array<Maybe<PageToPageConnectionEdge>>>;
    /** The nodes of the connection, without the edges */
    nodes?: Maybe<Array<Maybe<Page>>>;
    /** Information about pagination in a connection. */
    pageInfo?: Maybe<WpPageInfo>;
    /** Information about the type of content being queried */
    postTypeInfo?: Maybe<PostType>;
};

/** An edge in a connection */
export type PageToPageConnectionEdge = {
    /** A cursor for use in pagination */
    cursor?: Maybe<Scalars["String"]>;
    /** The item at the end of the edge */
    node?: Maybe<Page>;
};

/** Arguments for filtering the PageToPageConnection connection */
export type PageToPageConnectionWhereArgs = {
    /** The user that's connected as the author of the object. Use the
     * 							userId for the author object.
     */
    author?: Maybe<Scalars["Int"]>;
    /** Find objects connected to author(s) in the array of author's userIds */
    authorIn?: Maybe<Array<Maybe<Scalars["ID"]>>>;
    /** Find objects connected to the author by the author's nicename */
    authorName?: Maybe<Scalars["String"]>;
    /** Find objects NOT connected to author(s) in the array of author's
     * 							userIds
     */
    authorNotIn?: Maybe<Array<Maybe<Scalars["ID"]>>>;
    /** Category ID */
    categoryId?: Maybe<Scalars["Int"]>;
    /** Array of category IDs, used to display objects from one
     * 										category OR another
     */
    categoryIn?: Maybe<Array<Maybe<Scalars["ID"]>>>;
    /** Use Category Slug */
    categoryName?: Maybe<Scalars["String"]>;
    /** Array of category IDs, used to display objects from one
     * 										category OR another
     */
    categoryNotIn?: Maybe<Array<Maybe<Scalars["ID"]>>>;
    /** Filter the connection based on dates */
    dateQuery?: Maybe<DateQueryInput>;
    /** True for objects with passwords; False for objects without passwords;
     * 							null for all objects with or without passwords
     */
    hasPassword?: Maybe<Scalars["Boolean"]>;
    /** Specific ID of the object */
    id?: Maybe<Scalars["Int"]>;
    /** Array of IDs for the objects to retrieve */
    in?: Maybe<Array<Maybe<Scalars["ID"]>>>;
    /** Get objects with a specific mimeType property */
    mimeType?: Maybe<MimeTypeEnum>;
    /** Slug / post_name of the object */
    name?: Maybe<Scalars["String"]>;
    /** Specify objects to retrieve. Use slugs */
    nameIn?: Maybe<Array<Maybe<Scalars["String"]>>>;
    /** Specify IDs NOT to retrieve. If this is used in the same query as "in",
     * 							it will be ignored
     */
    notIn?: Maybe<Array<Maybe<Scalars["ID"]>>>;
    /** What paramater to use to order the objects by. */
    orderby?: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>;
    /** Use ID to return only children. Use 0 to return only top-level
     * 							items
     */
    parent?: Maybe<Scalars["String"]>;
    /** Specify objects whose parent is in an array */
    parentIn?: Maybe<Array<Maybe<Scalars["ID"]>>>;
    /** Specify posts whose parent is not in an array */
    parentNotIn?: Maybe<Array<Maybe<Scalars["ID"]>>>;
    /** Show posts with a specific password. */
    password?: Maybe<Scalars["String"]>;
    /** Show Posts based on a keyword search */
    search?: Maybe<Scalars["String"]>;
    stati?: Maybe<Array<Maybe<PostStatusEnum>>>;
    status?: Maybe<PostStatusEnum>;
    /** Tag Slug */
    tag?: Maybe<Scalars["String"]>;
    /** Use Tag ID */
    tagId?: Maybe<Scalars["String"]>;
    /** Array of tag IDs, used to display objects from one tag OR
     * 							another
     */
    tagIn?: Maybe<Array<Maybe<Scalars["ID"]>>>;
    /** Array of tag IDs, used to display objects from one tag OR
     * 							another
     */
    tagNotIn?: Maybe<Array<Maybe<Scalars["ID"]>>>;
    /** Array of tag slugs, used to display objects from one tag OR
     * 							another
     */
    tagSlugAnd?: Maybe<Array<Maybe<Scalars["String"]>>>;
    /** Array of tag slugs, used to exclude objects in specified
     * 							tags
     */
    tagSlugIn?: Maybe<Array<Maybe<Scalars["String"]>>>;
    taxQuery?: Maybe<PageToPageConnectionWhereArgsTaxQuery>;
    /** Title of the object */
    title?: Maybe<Scalars["String"]>;
};

export type PageToPageConnectionWhereArgsTaxArray = {
    taxonomy?: Maybe<TaxonomyEnum>;
    field?: Maybe<PageToPageConnectionWhereArgsTaxQueryField>;
    /** A list of term slugs */
    terms?: Maybe<Array<Maybe<Scalars["String"]>>>;
    /** Whether or not to include children for hierarchical
     * 											taxonomies. Defaults to false to improve performance (note that
     * 											this is opposite of the default for WP_Query).
     */
    includeChildren?: Maybe<Scalars["Boolean"]>;
    operator?: Maybe<PageToPageConnectionWhereArgsTaxQueryOperator>;
};

/** Query objects based on taxonomy parameters */
export type PageToPageConnectionWhereArgsTaxQuery = {
    relation?: Maybe<RelationEnum>;
    taxArray?: Maybe<Array<Maybe<PageToPageConnectionWhereArgsTaxArray>>>;
};

/** Which field to select taxonomy term by. Default value is "term_id" */
export enum PageToPageConnectionWhereArgsTaxQueryField {
    Id = "ID",
    Name = "NAME",
    Slug = "SLUG",
    Taxonomy_Id = "TAXONOMY_ID",
}

export enum PageToPageConnectionWhereArgsTaxQueryOperator {
    And = "AND",
    Exists = "EXISTS",
    In = "IN",
    Not_Exists = "NOT_EXISTS",
    Not_In = "NOT_IN",
}

/** An plugin object */
export type Plugin = Node & {
    /** Name of the plugin author(s), may also be a company name. */
    author?: Maybe<Scalars["String"]>;
    /** URI for the related author(s)/company website. */
    authorUri?: Maybe<Scalars["String"]>;
    /** Description of the plugin. */
    description?: Maybe<Scalars["String"]>;
    id: Scalars["ID"];
    /** Display name of the plugin. */
    name?: Maybe<Scalars["String"]>;
    /** URI for the plugin website. This is useful for directing users for support requests etc. */
    pluginUri?: Maybe<Scalars["String"]>;
    /** Current version of the plugin. */
    version?: Maybe<Scalars["String"]>;
};

/** The post type */
export type Post = Node & {
    /** Ancestors of the object */
    ancestors?: Maybe<Array<Maybe<PostObjectUnion>>>;
    /** The author field will return a queryable User type matching the post&#039;s author. */
    author?: Maybe<User>;
    /** Connection between the post type and the post type */
    categories?: Maybe<PostToCategoryConnection>;
    /** The number of comments. Even though WPGraphQL denotes this field as an
     * integer, in WordPress this field should be saved as a numeric string for compatibility.
     */
    commentCount?: Maybe<Scalars["Int"]>;
    /** Connection between the post type and the post type */
    comments?: Maybe<PostToCommentConnection>;
    /** Whether the comments are open or closed for this particular post. */
    commentStatus?: Maybe<Scalars["String"]>;
    /** The content of the post. */
    content?: Maybe<Scalars["String"]>;
    /** Post publishing date. */
    date?: Maybe<Scalars["String"]>;
    /** The publishing date set in GMT. */
    dateGmt?: Maybe<Scalars["String"]>;
    /** The desired slug of the post */
    desiredSlug?: Maybe<Scalars["String"]>;
    /** The user that most recently edited the object */
    editLast?: Maybe<User>;
    /** If a user has edited the object within the past 15 seconds, this will return
     * the user and the time they last edited. Null if the edit lock doesn&#039;t
     * exist or is greater than 15 seconds
     */
    editLock?: Maybe<EditLock>;
    /** The RSS enclosure for the object */
    enclosure?: Maybe<Scalars["String"]>;
    /** The excerpt of the post. */
    excerpt?: Maybe<Scalars["String"]>;
    /** The featured image for the object */
    featuredImage?: Maybe<MediaItem>;
    /** The global unique identifier for this post. This currently matches the value
     * stored in WP_Post-&gt;guid and the guid column in the &quot;post_objects&quot;
     * database table.
     */
    guid?: Maybe<Scalars["String"]>;
    /** The globally unique ID for the object */
    id: Scalars["ID"];
    /** The permalink of the post */
    link?: Maybe<Scalars["String"]>;
    /** A field used for ordering posts. This is typically used with nav menu items or
     * for special ordering of hierarchical content types.
     */
    menuOrder?: Maybe<Scalars["Int"]>;
    /** The local modified time for a post. If a post was recently updated the
     * modified field will change to match the corresponding time.
     */
    modified?: Maybe<Scalars["String"]>;
    /** The GMT modified time for a post. If a post was recently updated the modified
     * field will change to match the corresponding time in GMT.
     */
    modifiedGmt?: Maybe<Scalars["String"]>;
    /** The parent of the object. The parent object can be of various types */
    parent?: Maybe<PostObjectUnion>;
    /** URLs that have been pinged. */
    pinged?: Maybe<Array<Maybe<Scalars["String"]>>>;
    /** Whether the pings are open or closed for this particular post. */
    pingStatus?: Maybe<Scalars["String"]>;
    /** The id field matches the WP_Post-&gt;ID field. */
    postId: Scalars["Int"];
    /** The uri slug for the post. This is equivalent to the WP_Post-&gt;post_name
     * field and the post_name column in the database for the
     * &quot;post_objects&quot; table.
     */
    slug?: Maybe<Scalars["String"]>;
    /** The current status of the object */
    status?: Maybe<Scalars["String"]>;
    /** Connection between the post type and the post type */
    tags?: Maybe<PostToTagConnection>;
    /** Terms connected to the post */
    termNames?: Maybe<Array<Maybe<Scalars["String"]>>>;
    /** Terms connected to the post */
    terms?: Maybe<Array<Maybe<TermObjectUnion>>>;
    /** Terms connected to the post */
    termSlugs?: Maybe<Array<Maybe<Scalars["String"]>>>;
    /** The title of the post. This is currently just the raw title. An amendment to support rendered title needs to be made. */
    title?: Maybe<Scalars["String"]>;
    /** URLs queued to be pinged. */
    toPing?: Maybe<Array<Maybe<Scalars["String"]>>>;
    /** URI path for the resource */
    uri?: Maybe<Scalars["String"]>;
    /** The WordPress post type info object. Schema extension by WPNext. */
    wpNextPostTypeInfo: WpNextPostType;
};

/** The post type */
export type PostAncestorsArgs = {
    types?: Maybe<Array<Maybe<PostTypeEnum>>>;
};

/** The post type */
export type PostCategoriesArgs = {
    first?: Maybe<Scalars["Int"]>;
    last?: Maybe<Scalars["Int"]>;
    after?: Maybe<Scalars["String"]>;
    before?: Maybe<Scalars["String"]>;
    where?: Maybe<PostToCategoryConnectionWhereArgs>;
};

/** The post type */
export type PostCommentsArgs = {
    first?: Maybe<Scalars["Int"]>;
    last?: Maybe<Scalars["Int"]>;
    after?: Maybe<Scalars["String"]>;
    before?: Maybe<Scalars["String"]>;
    where?: Maybe<PostToCommentConnectionWhereArgs>;
};

/** The post type */
export type PostContentArgs = {
    format?: Maybe<PostObjectFieldFormatEnum>;
};

/** The post type */
export type PostExcerptArgs = {
    format?: Maybe<PostObjectFieldFormatEnum>;
};

/** The post type */
export type PostTagsArgs = {
    first?: Maybe<Scalars["Int"]>;
    last?: Maybe<Scalars["Int"]>;
    after?: Maybe<Scalars["String"]>;
    before?: Maybe<Scalars["String"]>;
    where?: Maybe<PostToTagConnectionWhereArgs>;
};

/** The post type */
export type PostTermNamesArgs = {
    taxonomies?: Maybe<Array<Maybe<TaxonomyEnum>>>;
};

/** The post type */
export type PostTermsArgs = {
    taxonomies?: Maybe<Array<Maybe<TaxonomyEnum>>>;
};

/** The post type */
export type PostTermSlugsArgs = {
    taxonomies?: Maybe<Array<Maybe<TaxonomyEnum>>>;
};

/** The post type */
export type PostTitleArgs = {
    format?: Maybe<PostObjectFieldFormatEnum>;
};

/** Set relationships between the post to categories */
export type PostCategoriesInput = {
    /** If true, this will append the category to existing related categories. If
     * false, this will replace existing relationships. Default true.
     */
    append?: Maybe<Scalars["Boolean"]>;
    nodes?: Maybe<Array<Maybe<PostCategoriesNodeInput>>>;
};

/** List of categories to connect the post to. If an ID is set, it will be used to
 * create the connection. If not, it will look for a slug. If neither are valid
 * existing terms, and the site is configured to allow terms to be created during
 * post mutations, a term will be created using the Name if it exists in the input,
 * then fallback to the slug if it exists.
 */
export type PostCategoriesNodeInput = {
    /** The description of the category. This field is used to set a description of
     * the category if a new one is created during the mutation.
     */
    description?: Maybe<Scalars["String"]>;
    /** The ID of the category. If present, this will be used to connect to the post.
     * If no existing category exists with this ID, no connection will be made.
     */
    id?: Maybe<Scalars["ID"]>;
    /** The name of the category. This field is used to create a new term, if term
     * creation is enabled in nested mutations, and if one does not already exist
     * with the provided slug or ID or if a slug or ID is not provided. If no name is
     * included and a term is created, the creation will fallback to the slug field.
     */
    name?: Maybe<Scalars["String"]>;
    /** The slug of the category. If no ID is present, this field will be used to make
     * a connection. If no existing term exists with this slug, this field will be
     * used as a fallback to the Name field when creating a new term to connect to,
     * if term creation is enabled as a nested mutation.
     */
    slug?: Maybe<Scalars["String"]>;
};

/** The format of post field data. */
export enum PostObjectFieldFormatEnum {
    /** Provide the field value directly from database */
    Raw = "RAW",
    /** Apply the default WordPress rendering */
    Rendered = "RENDERED",
}

/** The column to use when filtering by date */
export enum PostObjectsConnectionDateColumnEnum {
    Date = "DATE",
    Modified = "MODIFIED",
}

/** Field to order the connection by */
export enum PostObjectsConnectionOrderbyEnum {
    /** Order by author */
    Author = "AUTHOR",
    /** Order by publish date */
    Date = "DATE",
    /** Preserve the ID order given in the IN array */
    In = "IN",
    /** Order by the menu order value */
    Menu_Order = "MENU_ORDER",
    /** Order by last modified date */
    Modified = "MODIFIED",
    /** Preserve slug order given in the NAME_IN array */
    Name_In = "NAME_IN",
    /** Order by parent ID */
    Parent = "PARENT",
    /** Order by slug */
    Slug = "SLUG",
    /** Order by title */
    Title = "TITLE",
}

/** Options for ordering the connection */
export type PostObjectsConnectionOrderbyInput = {
    field: PostObjectsConnectionOrderbyEnum;
    order?: Maybe<OrderEnum>;
};

export type PostObjectUnion = Post | Page | MediaItem | Revision | Demo;

/** The status of the object. */
export enum PostStatusEnum {
    /** Objects with the acf-disabled status */
    Acf_Disabled = "ACF_DISABLED",
    /** Objects with the auto-draft status */
    Auto_Draft = "AUTO_DRAFT",
    /** Objects with the draft status */
    Draft = "DRAFT",
    /** Objects with the future status */
    Future = "FUTURE",
    /** Objects with the inherit status */
    Inherit = "INHERIT",
    /** Objects with the pending status */
    Pending = "PENDING",
    /** Objects with the private status */
    Private = "PRIVATE",
    /** Objects with the publish status */
    Publish = "PUBLISH",
    /** Objects with the request-completed status */
    Request_Completed = "REQUEST_COMPLETED",
    /** Objects with the request-confirmed status */
    Request_Confirmed = "REQUEST_CONFIRMED",
    /** Objects with the request-failed status */
    Request_Failed = "REQUEST_FAILED",
    /** Objects with the request-pending status */
    Request_Pending = "REQUEST_PENDING",
    /** Objects with the trash status */
    Trash = "TRASH",
}

/** Set relationships between the post to tags */
export type PostTagsInput = {
    /** If true, this will append the tag to existing related tags. If false, this
     * will replace existing relationships. Default true.
     */
    append?: Maybe<Scalars["Boolean"]>;
    nodes?: Maybe<Array<Maybe<PostTagsNodeInput>>>;
};

/** List of tags to connect the post to. If an ID is set, it will be used to create
 * the connection. If not, it will look for a slug. If neither are valid existing
 * terms, and the site is configured to allow terms to be created during post
 * mutations, a term will be created using the Name if it exists in the input, then
 * fallback to the slug if it exists.
 */
export type PostTagsNodeInput = {
    /** The description of the tag. This field is used to set a description of the tag
     * if a new one is created during the mutation.
     */
    description?: Maybe<Scalars["String"]>;
    /** The ID of the tag. If present, this will be used to connect to the post. If no
     * existing tag exists with this ID, no connection will be made.
     */
    id?: Maybe<Scalars["ID"]>;
    /** The name of the tag. This field is used to create a new term, if term creation
     * is enabled in nested mutations, and if one does not already exist with the
     * provided slug or ID or if a slug or ID is not provided. If no name is included
     * and a term is created, the creation will fallback to the slug field.
     */
    name?: Maybe<Scalars["String"]>;
    /** The slug of the tag. If no ID is present, this field will be used to make a
     * connection. If no existing term exists with this slug, this field will be used
     * as a fallback to the Name field when creating a new term to connect to, if
     * term creation is enabled as a nested mutation.
     */
    slug?: Maybe<Scalars["String"]>;
};

/** Connection between the post type and the post type */
export type PostToCategoryConnection = {
    /** Edges for the PostToCategoryConnection connection */
    edges?: Maybe<Array<Maybe<PostToCategoryConnectionEdge>>>;
    /** The nodes of the connection, without the edges */
    nodes?: Maybe<Array<Maybe<Category>>>;
    /** Information about pagination in a connection. */
    pageInfo?: Maybe<WpPageInfo>;
    /** Information about the type of content being queried */
    taxonomyInfo?: Maybe<Taxonomy>;
};

/** An edge in a connection */
export type PostToCategoryConnectionEdge = {
    /** A cursor for use in pagination */
    cursor?: Maybe<Scalars["String"]>;
    /** The item at the end of the edge */
    node?: Maybe<Category>;
};

/** Arguments for filtering the PostToCategoryConnection connection */
export type PostToCategoryConnectionWhereArgs = {
    /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
    cacheDomain?: Maybe<Scalars["String"]>;
    /** True to limit results to terms that have no children. This parameter has no
     * effect on non-hierarchical taxonomies. Default false.
     */
    childless?: Maybe<Scalars["Boolean"]>;
    /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
    childOf?: Maybe<Scalars["Int"]>;
    /** Retrieve terms where the description is LIKE the input value. Default empty. */
    descriptionLike?: Maybe<Scalars["String"]>;
    /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
    exclude?: Maybe<Array<Maybe<Scalars["ID"]>>>;
    /** Array of term ids to exclude along with all of their descendant terms. If
     * $include is non-empty, $exclude_tree is ignored. Default empty array.
     */
    excludeTree?: Maybe<Array<Maybe<Scalars["ID"]>>>;
    /** Whether to hide terms not assigned to any posts. Accepts true or false. Default true */
    hideEmpty?: Maybe<Scalars["Boolean"]>;
    /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
    hierarchical?: Maybe<Scalars["Boolean"]>;
    /** Array of term ids to include. Default empty array. */
    include?: Maybe<Array<Maybe<Scalars["ID"]>>>;
    /** Array of names to return term(s) for. Default empty. */
    name?: Maybe<Array<Maybe<Scalars["String"]>>>;
    /** Retrieve terms where the name is LIKE the input value. Default empty. */
    nameLike?: Maybe<Scalars["String"]>;
    /** Array of object IDs. Results will be limited to terms associated with these objects. */
    objectIds?: Maybe<Array<Maybe<Scalars["ID"]>>>;
    /** Field(s) to order terms by. Defaults to 'name'. */
    orderby?: Maybe<TermObjectsConnectionOrderbyEnum>;
    /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
    padCounts?: Maybe<Scalars["Boolean"]>;
    /** Parent term ID to retrieve direct-child terms of. Default empty. */
    parent?: Maybe<Scalars["Int"]>;
    /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
    search?: Maybe<Scalars["String"]>;
    /** Default false. If true, only the items connected to the source item will be
     * returned. If false, all items will be returned regardless of connection to the source
     */
    shouldOnlyIncludeConnectedItems?: Maybe<Scalars["Boolean"]>;
    /** Default false. If true, the connection will be output in a flat list instead
     * of the hierarchical list. So child terms will be output in the same level as
     * the parent terms
     */
    shouldOutputInFlatList?: Maybe<Scalars["Boolean"]>;
    /** Array of slugs to return term(s) for. Default empty. */
    slug?: Maybe<Array<Maybe<Scalars["String"]>>>;
    /** Array of term taxonomy IDs, to match when querying terms. */
    termTaxonomId?: Maybe<Array<Maybe<Scalars["ID"]>>>;
    /** Whether to prime meta caches for matched terms. Default true. */
    updateTermMetaCache?: Maybe<Scalars["Boolean"]>;
};

/** Connection between the post type and the post type */
export type PostToCommentConnection = {
    /** Edges for the PostToCommentConnection connection */
    edges?: Maybe<Array<Maybe<PostToCommentConnectionEdge>>>;
    /** The nodes of the connection, without the edges */
    nodes?: Maybe<Array<Maybe<Comment>>>;
    /** Information about pagination in a connection. */
    pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type PostToCommentConnectionEdge = {
    /** A cursor for use in pagination */
    cursor?: Maybe<Scalars["String"]>;
    /** The item at the end of the edge */
    node?: Maybe<Comment>;
};

/** Arguments for filtering the PostToCommentConnection connection */
export type PostToCommentConnectionWhereArgs = {
    /** Comment author email address. */
    authorEmail?: Maybe<Scalars["String"]>;
    /** Array of author IDs to include comments for. */
    authorIn?: Maybe<Array<Maybe<Scalars["ID"]>>>;
    /** Array of author IDs to exclude comments for. */
    authorNotIn?: Maybe<Array<Maybe<Scalars["ID"]>>>;
    /** Comment author URL. */
    authorUrl?: Maybe<Scalars["String"]>;
    /** Array of comment IDs to include. */
    commentIn?: Maybe<Array<Maybe<Scalars["ID"]>>>;
    /** Array of IDs of users whose unapproved comments will be returned by the
     * 							query regardless of status.
     */
    commentNotIn?: Maybe<Array<Maybe<Scalars["ID"]>>>;
    /** Include comments of a given type. */
    commentType?: Maybe<Scalars["String"]>;
    /** Include comments from a given array of comment types. */
    commentTypeIn?: Maybe<Array<Maybe<Scalars["String"]>>>;
    /** Exclude comments from a given array of comment types. */
    commentTypeNotIn?: Maybe<Scalars["String"]>;
    /** Content object author ID to limit results by. */
    contentAuthor?: Maybe<Array<Maybe<Scalars["ID"]>>>;
    /** Array of author IDs to retrieve comments for. */
    contentAuthorIn?: Maybe<Array<Maybe<Scalars["ID"]>>>;
    /** Array of author IDs *not* to retrieve comments for. */
    contentAuthorNotIn?: Maybe<Array<Maybe<Scalars["ID"]>>>;
    /** Limit results to those affiliated with a given content object
     * 							ID.
     */
    contentId?: Maybe<Scalars["ID"]>;
    /** Array of content object IDs to include affiliated comments
     * 							for.
     */
    contentIdIn?: Maybe<Array<Maybe<Scalars["ID"]>>>;
    /** Array of content object IDs to exclude affiliated comments
     * 							for.
     */
    contentIdNotIn?: Maybe<Array<Maybe<Scalars["ID"]>>>;
    /** Content object name to retrieve affiliated comments for. */
    contentName?: Maybe<Scalars["String"]>;
    /** Content Object parent ID to retrieve affiliated comments for. */
    contentParent?: Maybe<Scalars["Int"]>;
    /** Array of content object statuses to retrieve affiliated comments for.
     * 							Pass 'any' to match any value.
     */
    contentStatus?: Maybe<Array<Maybe<PostStatusEnum>>>;
    /** Content object type or array of types to retrieve affiliated comments for. Pass 'any' to match any value. */
    contentType?: Maybe<Array<Maybe<PostStatusEnum>>>;
    /** Array of author IDs to include comments for. */
    includeUnapproved?: Maybe<Array<Maybe<Scalars["ID"]>>>;
    /** Karma score to retrieve matching comments for. */
    karma?: Maybe<Scalars["Int"]>;
    /** The cardinality of the order of the connection */
    order?: Maybe<OrderEnum>;
    /** Field to order the comments by. */
    orderby?: Maybe<CommentsConnectionOrderbyEnum>;
    /** Parent ID of comment to retrieve children of. */
    parent?: Maybe<Scalars["Int"]>;
    /** Array of parent IDs of comments to retrieve children for. */
    parentIn?: Maybe<Array<Maybe<Scalars["ID"]>>>;
    /** Array of parent IDs of comments *not* to retrieve children
     * 							for.
     */
    parentNotIn?: Maybe<Array<Maybe<Scalars["ID"]>>>;
    /** Search term(s) to retrieve matching comments for. */
    search?: Maybe<Scalars["String"]>;
    /** Comment status to limit results by. */
    status?: Maybe<Scalars["String"]>;
    /** Include comments for a specific user ID. */
    userId?: Maybe<Scalars["ID"]>;
};

/** Connection between the post type and the post type */
export type PostToTagConnection = {
    /** Edges for the PostToTagConnection connection */
    edges?: Maybe<Array<Maybe<PostToTagConnectionEdge>>>;
    /** The nodes of the connection, without the edges */
    nodes?: Maybe<Array<Maybe<Tag>>>;
    /** Information about pagination in a connection. */
    pageInfo?: Maybe<WpPageInfo>;
    /** Information about the type of content being queried */
    taxonomyInfo?: Maybe<Taxonomy>;
};

/** An edge in a connection */
export type PostToTagConnectionEdge = {
    /** A cursor for use in pagination */
    cursor?: Maybe<Scalars["String"]>;
    /** The item at the end of the edge */
    node?: Maybe<Tag>;
};

/** Arguments for filtering the PostToTagConnection connection */
export type PostToTagConnectionWhereArgs = {
    /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
    cacheDomain?: Maybe<Scalars["String"]>;
    /** True to limit results to terms that have no children. This parameter has no
     * effect on non-hierarchical taxonomies. Default false.
     */
    childless?: Maybe<Scalars["Boolean"]>;
    /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
    childOf?: Maybe<Scalars["Int"]>;
    /** Retrieve terms where the description is LIKE the input value. Default empty. */
    descriptionLike?: Maybe<Scalars["String"]>;
    /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
    exclude?: Maybe<Array<Maybe<Scalars["ID"]>>>;
    /** Array of term ids to exclude along with all of their descendant terms. If
     * $include is non-empty, $exclude_tree is ignored. Default empty array.
     */
    excludeTree?: Maybe<Array<Maybe<Scalars["ID"]>>>;
    /** Whether to hide terms not assigned to any posts. Accepts true or false. Default true */
    hideEmpty?: Maybe<Scalars["Boolean"]>;
    /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
    hierarchical?: Maybe<Scalars["Boolean"]>;
    /** Array of term ids to include. Default empty array. */
    include?: Maybe<Array<Maybe<Scalars["ID"]>>>;
    /** Array of names to return term(s) for. Default empty. */
    name?: Maybe<Array<Maybe<Scalars["String"]>>>;
    /** Retrieve terms where the name is LIKE the input value. Default empty. */
    nameLike?: Maybe<Scalars["String"]>;
    /** Array of object IDs. Results will be limited to terms associated with these objects. */
    objectIds?: Maybe<Array<Maybe<Scalars["ID"]>>>;
    /** Field(s) to order terms by. Defaults to 'name'. */
    orderby?: Maybe<TermObjectsConnectionOrderbyEnum>;
    /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
    padCounts?: Maybe<Scalars["Boolean"]>;
    /** Parent term ID to retrieve direct-child terms of. Default empty. */
    parent?: Maybe<Scalars["Int"]>;
    /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
    search?: Maybe<Scalars["String"]>;
    /** Default false. If true, only the items connected to the source item will be
     * returned. If false, all items will be returned regardless of connection to the source
     */
    shouldOnlyIncludeConnectedItems?: Maybe<Scalars["Boolean"]>;
    /** Default false. If true, the connection will be output in a flat list instead
     * of the hierarchical list. So child terms will be output in the same level as
     * the parent terms
     */
    shouldOutputInFlatList?: Maybe<Scalars["Boolean"]>;
    /** Array of slugs to return term(s) for. Default empty. */
    slug?: Maybe<Array<Maybe<Scalars["String"]>>>;
    /** Array of term taxonomy IDs, to match when querying terms. */
    termTaxonomId?: Maybe<Array<Maybe<Scalars["ID"]>>>;
    /** Whether to prime meta caches for matched terms. Default true. */
    updateTermMetaCache?: Maybe<Scalars["Boolean"]>;
};

/** An Post Type object */
export type PostType = Node & {
    /** Whether this content type should can be exported. */
    canExport?: Maybe<Scalars["Boolean"]>;
    /** List of Taxonomies connected to the Post Type */
    connectedTaxonomies?: Maybe<Array<Maybe<Taxonomy>>>;
    /** A list of Taxonomies associated with the post type */
    connectedTaxonomyNames?: Maybe<Array<Maybe<Scalars["String"]>>>;
    /** Whether delete this type of content when the author of it is deleted from the system. */
    deleteWithUser?: Maybe<Scalars["Boolean"]>;
    /** Description of the content type. */
    description?: Maybe<Scalars["String"]>;
    /** Whether to exclude posts with this post type from front end search results. */
    excludeFromSearch?: Maybe<Scalars["Boolean"]>;
    /** The plural name of the post type within the GraphQL Schema. */
    graphqlPluralName?: Maybe<Scalars["String"]>;
    /** The singular name of the post type within the GraphQL Schema. */
    graphqlSingleName?: Maybe<Scalars["String"]>;
    /** Whether this content type should have archives. Content archives are generated by type and by date. */
    hasArchive?: Maybe<Scalars["Boolean"]>;
    /** Whether the post type is hierarchical, for example pages. */
    hierarchical?: Maybe<Scalars["Boolean"]>;
    id: Scalars["ID"];
    /** Display name of the content type. */
    label?: Maybe<Scalars["String"]>;
    /** Details about the post type labels. */
    labels?: Maybe<PostTypeLabelDetails>;
    /** The name of the icon file to display as a menu icon. */
    menuIcon?: Maybe<Scalars["String"]>;
    /** The position of this post type in the menu. Only applies if show_in_menu is true. */
    menuPosition?: Maybe<Scalars["Int"]>;
    /** The internal name of the post type. This should not be used for display purposes. */
    name?: Maybe<Scalars["String"]>;
    /** Whether a post type is intended for use publicly either via the admin
     * interface or by front-end users. While the default settings of
     * exclude_from_search, publicly_queryable, show_ui, and show_in_nav_menus are
     * inherited from public, each does not rely on this relationship and controls a
     * very specific intention.
     */
    public?: Maybe<Scalars["Boolean"]>;
    /** Whether queries can be performed on the front end for the post type as part of parse_request(). */
    publiclyQueryable?: Maybe<Scalars["Boolean"]>;
    /** Name of content type to diplay in REST API &quot;wp/v2&quot; namespace. */
    restBase?: Maybe<Scalars["String"]>;
    /** The REST Controller class assigned to handling this content type. */
    restControllerClass?: Maybe<Scalars["String"]>;
    /** Makes this post type available via the admin bar. */
    showInAdminBar?: Maybe<Scalars["Boolean"]>;
    /** Whether to add the post type to the GraphQL Schema. */
    showInGraphql?: Maybe<Scalars["Boolean"]>;
    /** Where to show the post type in the admin menu. To work, $show_ui must be true.
     * If true, the post type is shown in its own top level menu. If false, no menu
     * is shown. If a string of an existing top level menu (eg. &quot;tools.php&quot;
     * or &quot;edit.php?post_type=page&quot;), the post type will be placed as a
     * sub-menu of that.
     */
    showInMenu?: Maybe<Scalars["Boolean"]>;
    /** Makes this post type available for selection in navigation menus. */
    showInNavMenus?: Maybe<Scalars["Boolean"]>;
    /** Whether to add the post type route in the REST API &quot;wp/v2&quot; namespace. */
    showInRest?: Maybe<Scalars["Boolean"]>;
    /** Whether to generate and allow a UI for managing this post type in the admin. */
    showUi?: Maybe<Scalars["Boolean"]>;
};

/** An Post Type object */
export type PostTypeConnectedTaxonomiesArgs = {
    taxonomies?: Maybe<Array<Maybe<TaxonomyEnum>>>;
};

/** An Post Type object */
export type PostTypeConnectedTaxonomyNamesArgs = {
    taxonomies?: Maybe<Array<Maybe<TaxonomyEnum>>>;
};

/** Allowed Post Types */
export enum PostTypeEnum {
    Attachment = "ATTACHMENT",
    Demo = "DEMO",
    Page = "PAGE",
    Post = "POST",
    Revision = "REVISION",
}

/** Details for labels of the PostType */
export type PostTypeLabelDetails = {
    /** Default is ‘Add New’ for both hierarchical and non-hierarchical types. */
    addNew?: Maybe<Scalars["String"]>;
    /** Label for adding a new singular item. */
    addNewItem?: Maybe<Scalars["String"]>;
    /** Label to signify all items in a submenu link. */
    allItems?: Maybe<Scalars["String"]>;
    /** Label for archives in nav menus */
    archives?: Maybe<Scalars["String"]>;
    /** Label for the attributes meta box. */
    attributes?: Maybe<Scalars["String"]>;
    /** Label for editing a singular item. */
    editItem?: Maybe<Scalars["String"]>;
    /** Label for the Featured Image meta box title. */
    featuredImage?: Maybe<Scalars["String"]>;
    /** Label for the table views hidden heading. */
    filterItemsList?: Maybe<Scalars["String"]>;
    /** Label for the media frame button. */
    insertIntoItem?: Maybe<Scalars["String"]>;
    /** Label for the table hidden heading. */
    itemsList?: Maybe<Scalars["String"]>;
    /** Label for the table pagination hidden heading. */
    itemsListNavigation?: Maybe<Scalars["String"]>;
    /** Label for the menu name. */
    menuName?: Maybe<Scalars["String"]>;
    /** General name for the post type, usually plural. */
    name?: Maybe<Scalars["String"]>;
    /** Label for the new item page title. */
    newItem?: Maybe<Scalars["String"]>;
    /** Label used when no items are found. */
    notFound?: Maybe<Scalars["String"]>;
    /** Label used when no items are in the trash. */
    notFoundInTrash?: Maybe<Scalars["String"]>;
    /** Label used to prefix parents of hierarchical items. */
    parentItemColon?: Maybe<Scalars["String"]>;
    /** Label for removing the featured image. */
    removeFeaturedImage?: Maybe<Scalars["String"]>;
    /** Label for searching plural items. */
    searchItems?: Maybe<Scalars["String"]>;
    /** Label for setting the featured image. */
    setFeaturedImage?: Maybe<Scalars["String"]>;
    /** Name for one object of this post type. */
    singularName?: Maybe<Scalars["String"]>;
    /** Label for the media frame filter. */
    uploadedToThisItem?: Maybe<Scalars["String"]>;
    /** Label in the media frame for using a featured image. */
    useFeaturedImage?: Maybe<Scalars["String"]>;
    /** Label for viewing a singular item. */
    viewItem?: Maybe<Scalars["String"]>;
    /** Label for viewing post type archives. */
    viewItems?: Maybe<Scalars["String"]>;
};

/** The reading setting type */
export type ReadingSettings = {
    /** Blog pages show at most. */
    postsPerPage?: Maybe<Scalars["Int"]>;
};

/** Input for the registerUser mutation */
export type RegisterUserInput = {
    /** User's AOL IM account. */
    aim?: Maybe<Scalars["String"]>;
    clientMutationId: Scalars["String"];
    /** A string containing content about the user. */
    description?: Maybe<Scalars["String"]>;
    /** A string that will be shown on the site. Defaults to user's username. It is
     * likely that you will want to change this, for both appearance and security
     * through obscurity (that is if you dont use and delete the default admin user).
     */
    displayName?: Maybe<Scalars["String"]>;
    /** A string containing the user's email address. */
    email?: Maybe<Scalars["String"]>;
    /** 	The user's first name. */
    firstName?: Maybe<Scalars["String"]>;
    /** User's Jabber account. */
    jabber?: Maybe<Scalars["String"]>;
    /** The user's last name. */
    lastName?: Maybe<Scalars["String"]>;
    /** User's locale. */
    locale?: Maybe<Scalars["String"]>;
    /** A string that contains a URL-friendly name for the user. The default is the user's username. */
    nicename?: Maybe<Scalars["String"]>;
    /** The user's nickname, defaults to the user's username. */
    nickname?: Maybe<Scalars["String"]>;
    /** A string that contains the plain text password for the user. */
    password?: Maybe<Scalars["String"]>;
    /** The date the user registered. Format is Y-m-d H:i:s. */
    registered?: Maybe<Scalars["String"]>;
    /** A string for whether to enable the rich editor or not. False if not empty. */
    richEditing?: Maybe<Scalars["String"]>;
    /** An array of roles to be assigned to the user. */
    roles?: Maybe<Array<Maybe<Scalars["String"]>>>;
    /** A string that contains the user's username. */
    username: Scalars["String"];
    /** A string containing the user's URL for the user's web site. */
    websiteUrl?: Maybe<Scalars["String"]>;
    /** User's Yahoo IM account. */
    yim?: Maybe<Scalars["String"]>;
};

/** The payload for the registerUser mutation */
export type RegisterUserPayload = {
    clientMutationId: Scalars["String"];
    user?: Maybe<User>;
};

/** The logical relation between each item in the array when there are more than one. */
export enum RelationEnum {
    And = "AND",
    Or = "OR",
}

/** Input for the resetUserPassword mutation */
export type ResetUserPasswordInput = {
    clientMutationId: Scalars["String"];
    /** Password reset key */
    key?: Maybe<Scalars["String"]>;
    /** The user's login (username). */
    login?: Maybe<Scalars["String"]>;
    /** The new password. */
    password?: Maybe<Scalars["String"]>;
};

/** The payload for the resetUserPassword mutation */
export type ResetUserPasswordPayload = {
    clientMutationId: Scalars["String"];
    user?: Maybe<User>;
};

/** Input for the restoreComment mutation */
export type RestoreCommentInput = {
    clientMutationId: Scalars["String"];
    /** The ID of the comment to be restored */
    id: Scalars["ID"];
};

/** The payload for the restoreComment mutation */
export type RestoreCommentPayload = {
    clientMutationId: Scalars["String"];
    /** The restored comment object */
    comment?: Maybe<Comment>;
    /** The ID of the restored comment */
    restoredId?: Maybe<Scalars["ID"]>;
};

/** The revision type */
export type Revision = Node & {
    /** Ancestors of the object */
    ancestors?: Maybe<Array<Maybe<PostObjectUnion>>>;
    /** The author field will return a queryable User type matching the post&#039;s author. */
    author?: Maybe<User>;
    /** Whether the comments are open or closed for this particular post. */
    commentStatus?: Maybe<Scalars["String"]>;
    /** The content of the post. */
    content?: Maybe<Scalars["String"]>;
    /** Post publishing date. */
    date?: Maybe<Scalars["String"]>;
    /** The publishing date set in GMT. */
    dateGmt?: Maybe<Scalars["String"]>;
    /** The desired slug of the post */
    desiredSlug?: Maybe<Scalars["String"]>;
    /** The user that most recently edited the object */
    editLast?: Maybe<User>;
    /** If a user has edited the object within the past 15 seconds, this will return
     * the user and the time they last edited. Null if the edit lock doesn&#039;t
     * exist or is greater than 15 seconds
     */
    editLock?: Maybe<EditLock>;
    /** The RSS enclosure for the object */
    enclosure?: Maybe<Scalars["String"]>;
    /** The excerpt of the post. */
    excerpt?: Maybe<Scalars["String"]>;
    /** The global unique identifier for this post. This currently matches the value
     * stored in WP_Post-&gt;guid and the guid column in the &quot;post_objects&quot;
     * database table.
     */
    guid?: Maybe<Scalars["String"]>;
    /** The globally unique ID for the object */
    id: Scalars["ID"];
    /** The permalink of the post */
    link?: Maybe<Scalars["String"]>;
    /** A field used for ordering posts. This is typically used with nav menu items or
     * for special ordering of hierarchical content types.
     */
    menuOrder?: Maybe<Scalars["Int"]>;
    /** The local modified time for a post. If a post was recently updated the
     * modified field will change to match the corresponding time.
     */
    modified?: Maybe<Scalars["String"]>;
    /** The GMT modified time for a post. If a post was recently updated the modified
     * field will change to match the corresponding time in GMT.
     */
    modifiedGmt?: Maybe<Scalars["String"]>;
    /** The parent of the object. The parent object can be of various types */
    parent?: Maybe<PostObjectUnion>;
    /** URLs that have been pinged. */
    pinged?: Maybe<Array<Maybe<Scalars["String"]>>>;
    /** Whether the pings are open or closed for this particular post. */
    pingStatus?: Maybe<Scalars["String"]>;
    /** The id field matches the WP_Post-&gt;ID field. */
    revisionId: Scalars["Int"];
    /** The uri slug for the post. This is equivalent to the WP_Post-&gt;post_name
     * field and the post_name column in the database for the
     * &quot;post_objects&quot; table.
     */
    slug?: Maybe<Scalars["String"]>;
    /** The current status of the object */
    status?: Maybe<Scalars["String"]>;
    /** Terms connected to the revision */
    termNames?: Maybe<Array<Maybe<Scalars["String"]>>>;
    /** Terms connected to the revision */
    terms?: Maybe<Array<Maybe<TermObjectUnion>>>;
    /** Terms connected to the revision */
    termSlugs?: Maybe<Array<Maybe<Scalars["String"]>>>;
    /** The title of the post. This is currently just the raw title. An amendment to support rendered title needs to be made. */
    title?: Maybe<Scalars["String"]>;
    /** URLs queued to be pinged. */
    toPing?: Maybe<Array<Maybe<Scalars["String"]>>>;
    /** URI path for the resource */
    uri?: Maybe<Scalars["String"]>;
    /** The WordPress post type info object. Schema extension by WPNext. */
    wpNextPostTypeInfo: WpNextPostType;
};

/** The revision type */
export type RevisionAncestorsArgs = {
    types?: Maybe<Array<Maybe<PostTypeEnum>>>;
};

/** The revision type */
export type RevisionContentArgs = {
    format?: Maybe<PostObjectFieldFormatEnum>;
};

/** The revision type */
export type RevisionExcerptArgs = {
    format?: Maybe<PostObjectFieldFormatEnum>;
};

/** The revision type */
export type RevisionTermNamesArgs = {
    taxonomies?: Maybe<Array<Maybe<TaxonomyEnum>>>;
};

/** The revision type */
export type RevisionTermsArgs = {
    taxonomies?: Maybe<Array<Maybe<TaxonomyEnum>>>;
};

/** The revision type */
export type RevisionTermSlugsArgs = {
    taxonomies?: Maybe<Array<Maybe<TaxonomyEnum>>>;
};

/** The revision type */
export type RevisionTitleArgs = {
    format?: Maybe<PostObjectFieldFormatEnum>;
};

/** The root mutation */
export type RootMutation = {
    /** The payload for the UpdateCategory mutation */
    updateCategory?: Maybe<UpdateCategoryPayload>;
    /** The payload for the UpdateTag mutation */
    updateTag?: Maybe<UpdateTagPayload>;
    /** The payload for the createCategory mutation */
    createCategory?: Maybe<CreateCategoryPayload>;
    /** The payload for the createComment mutation */
    createComment?: Maybe<CreateCommentPayload>;
    /** The payload for the createDemo mutation */
    createDemo?: Maybe<CreateDemoPayload>;
    /** The payload for the createMediaItem mutation */
    createMediaItem?: Maybe<CreateMediaItemPayload>;
    /** The payload for the createPage mutation */
    createPage?: Maybe<CreatePagePayload>;
    /** The payload for the createPost mutation */
    createPost?: Maybe<CreatePostPayload>;
    /** The payload for the createTag mutation */
    createTag?: Maybe<CreateTagPayload>;
    /** The payload for the createUser mutation */
    createUser?: Maybe<CreateUserPayload>;
    /** The payload for the deleteCategory mutation */
    deleteCategory?: Maybe<DeleteCategoryPayload>;
    /** The payload for the deleteComment mutation */
    deleteComment?: Maybe<DeleteCommentPayload>;
    /** The payload for the deleteDemo mutation */
    deleteDemo?: Maybe<DeleteDemoPayload>;
    /** The payload for the deleteMediaItem mutation */
    deleteMediaItem?: Maybe<DeleteMediaItemPayload>;
    /** The payload for the deletePage mutation */
    deletePage?: Maybe<DeletePagePayload>;
    /** The payload for the deletePost mutation */
    deletePost?: Maybe<DeletePostPayload>;
    /** The payload for the deleteRevision mutation */
    deleteRevision?: Maybe<DeleteRevisionPayload>;
    /** The payload for the deleteTag mutation */
    deleteTag?: Maybe<DeleteTagPayload>;
    /** The payload for the deleteUser mutation */
    deleteUser?: Maybe<DeleteUserPayload>;
    increaseCount?: Maybe<Scalars["Int"]>;
    /** The payload for the registerUser mutation */
    registerUser?: Maybe<RegisterUserPayload>;
    /** The payload for the resetUserPassword mutation */
    resetUserPassword?: Maybe<ResetUserPasswordPayload>;
    /** The payload for the restoreComment mutation */
    restoreComment?: Maybe<RestoreCommentPayload>;
    /** The payload for the sendPasswordResetEmail mutation */
    sendPasswordResetEmail?: Maybe<SendPasswordResetEmailPayload>;
    /** The payload for the updateComment mutation */
    updateComment?: Maybe<UpdateCommentPayload>;
    /** The payload for the updateDemo mutation */
    updateDemo?: Maybe<UpdateDemoPayload>;
    /** The payload for the updateMediaItem mutation */
    updateMediaItem?: Maybe<UpdateMediaItemPayload>;
    /** The payload for the updatePage mutation */
    updatePage?: Maybe<UpdatePagePayload>;
    /** The payload for the updatePost mutation */
    updatePost?: Maybe<UpdatePostPayload>;
    /** The payload for the updateSettings mutation */
    updateSettings?: Maybe<UpdateSettingsPayload>;
    /** The payload for the updateUser mutation */
    updateUser?: Maybe<UpdateUserPayload>;
};

/** The root mutation */
export type RootMutationUpdateCategoryArgs = {
    input: UpdateCategoryInput;
};

/** The root mutation */
export type RootMutationUpdateTagArgs = {
    input: UpdateTagInput;
};

/** The root mutation */
export type RootMutationCreateCategoryArgs = {
    input: CreateCategoryInput;
};

/** The root mutation */
export type RootMutationCreateCommentArgs = {
    input: CreateCommentInput;
};

/** The root mutation */
export type RootMutationCreateDemoArgs = {
    input: CreateDemoInput;
};

/** The root mutation */
export type RootMutationCreateMediaItemArgs = {
    input: CreateMediaItemInput;
};

/** The root mutation */
export type RootMutationCreatePageArgs = {
    input: CreatePageInput;
};

/** The root mutation */
export type RootMutationCreatePostArgs = {
    input: CreatePostInput;
};

/** The root mutation */
export type RootMutationCreateTagArgs = {
    input: CreateTagInput;
};

/** The root mutation */
export type RootMutationCreateUserArgs = {
    input: CreateUserInput;
};

/** The root mutation */
export type RootMutationDeleteCategoryArgs = {
    input: DeleteCategoryInput;
};

/** The root mutation */
export type RootMutationDeleteCommentArgs = {
    input: DeleteCommentInput;
};

/** The root mutation */
export type RootMutationDeleteDemoArgs = {
    input: DeleteDemoInput;
};

/** The root mutation */
export type RootMutationDeleteMediaItemArgs = {
    input: DeleteMediaItemInput;
};

/** The root mutation */
export type RootMutationDeletePageArgs = {
    input: DeletePageInput;
};

/** The root mutation */
export type RootMutationDeletePostArgs = {
    input: DeletePostInput;
};

/** The root mutation */
export type RootMutationDeleteRevisionArgs = {
    input: DeleteRevisionInput;
};

/** The root mutation */
export type RootMutationDeleteTagArgs = {
    input: DeleteTagInput;
};

/** The root mutation */
export type RootMutationDeleteUserArgs = {
    input: DeleteUserInput;
};

/** The root mutation */
export type RootMutationIncreaseCountArgs = {
    count?: Maybe<Scalars["Int"]>;
};

/** The root mutation */
export type RootMutationRegisterUserArgs = {
    input: RegisterUserInput;
};

/** The root mutation */
export type RootMutationResetUserPasswordArgs = {
    input: ResetUserPasswordInput;
};

/** The root mutation */
export type RootMutationRestoreCommentArgs = {
    input: RestoreCommentInput;
};

/** The root mutation */
export type RootMutationSendPasswordResetEmailArgs = {
    input: SendPasswordResetEmailInput;
};

/** The root mutation */
export type RootMutationUpdateCommentArgs = {
    input: UpdateCommentInput;
};

/** The root mutation */
export type RootMutationUpdateDemoArgs = {
    input: UpdateDemoInput;
};

/** The root mutation */
export type RootMutationUpdateMediaItemArgs = {
    input: UpdateMediaItemInput;
};

/** The root mutation */
export type RootMutationUpdatePageArgs = {
    input: UpdatePageInput;
};

/** The root mutation */
export type RootMutationUpdatePostArgs = {
    input: UpdatePostInput;
};

/** The root mutation */
export type RootMutationUpdateSettingsArgs = {
    input: UpdateSettingsInput;
};

/** The root mutation */
export type RootMutationUpdateUserArgs = {
    input: UpdateUserInput;
};

/** The root entry point into the Graph */
export type RootQuery = {
    /** Entry point to get all settings for the site */
    allSettings?: Maybe<Settings>;
    /** Connection between the RootQuery type and the RootQuery type */
    categories?: Maybe<RootQueryToCategoryConnection>;
    /** A 0bject */
    category?: Maybe<Category>;
    /** Returns a Comment */
    comment?: Maybe<Comment>;
    /** Connection between the RootQuery type and the RootQuery type */
    comments?: Maybe<RootQueryToCommentConnection>;
    /** A 0bject */
    demo?: Maybe<Demo>;
    /** A demo object */
    demoBy?: Maybe<Demo>;
    /** Get the demo by its permalink. Schema extension by WPNext. */
    demoByPermalink?: Maybe<Demo>;
    /** Connection between the RootQuery type and the RootQuery type */
    demos?: Maybe<RootQueryToDemoConnection>;
    discussionSettings?: Maybe<DiscussionSettings>;
    generalSettings?: Maybe<GeneralSettings>;
    /** A 0bject */
    mediaItem?: Maybe<MediaItem>;
    /** A mediaItem object */
    mediaItemBy?: Maybe<MediaItem>;
    /** Get the mediaItem by its permalink. Schema extension by WPNext. */
    mediaItemByPermalink?: Maybe<MediaItem>;
    /** Connection between the RootQuery type and the RootQuery type */
    mediaItems?: Maybe<RootQueryToMediaItemConnection>;
    /** A WordPress navigation menu */
    menu?: Maybe<Menu>;
    /** Connection between the RootQuery type and the RootQuery type */
    menuItems?: Maybe<RootQueryToMenuItemConnection>;
    /** A WordPress navigation menu item */
    menuItem?: Maybe<MenuItem>;
    /** Connection between the RootQuery type and the RootQuery type */
    menus?: Maybe<RootQueryToMenuConnection>;
    /** Fetches an object given its ID */
    node?: Maybe<Node>;
    /** A 0bject */
    page?: Maybe<Page>;
    /** A page object */
    pageBy?: Maybe<Page>;
    /** Get the page by its permalink. Schema extension by WPNext. */
    pageByPermalink?: Maybe<Page>;
    /** Connection between the RootQuery type and the RootQuery type */
    pages?: Maybe<RootQueryToPageConnection>;
    /** A WordPress plugin */
    plugin?: Maybe<Plugin>;
    /** Connection between the RootQuery type and the RootQuery type */
    plugins?: Maybe<RootQueryToPluginConnection>;
    /** A 0bject */
    post?: Maybe<Post>;
    /** A post object */
    postBy?: Maybe<Post>;
    /** Get the post by its permalink. Schema extension by WPNext. */
    postByPermalink?: Maybe<Post>;
    /** Connection between the RootQuery type and the RootQuery type */
    posts?: Maybe<RootQueryToPostConnection>;
    readingSettings?: Maybe<ReadingSettings>;
    /** A 0bject */
    revision?: Maybe<Revision>;
    /** A revision object */
    revisionBy?: Maybe<Revision>;
    /** Get the revision by its permalink. Schema extension by WPNext. */
    revisionByPermalink?: Maybe<Revision>;
    /** Connection between the RootQuery type and the RootQuery type */
    revisions?: Maybe<RootQueryToRevisionConnection>;
    /** A 0bject */
    tag?: Maybe<Tag>;
    /** Connection between the RootQuery type and the RootQuery type */
    tags?: Maybe<RootQueryToTagConnection>;
    /** A Theme object */
    theme?: Maybe<Theme>;
    /** Connection between the RootQuery type and the RootQuery type */
    themes?: Maybe<RootQueryToThemeConnection>;
    /** Returns a user */
    user?: Maybe<User>;
    /** Connection between the RootQuery type and the RootQuery type */
    userRoles?: Maybe<RootQueryToUserRoleConnection>;
    /** Returns a user role */
    userRole?: Maybe<UserRole>;
    /** Connection between the RootQuery type and the RootQuery type */
    users?: Maybe<RootQueryToUserConnection>;
    /** Returns the current user */
    viewer?: Maybe<User>;
    writingSettings?: Maybe<WritingSettings>;
};

/** The root entry point into the Graph */
export type RootQueryCategoriesArgs = {
    first?: Maybe<Scalars["Int"]>;
    last?: Maybe<Scalars["Int"]>;
    after?: Maybe<Scalars["String"]>;
    before?: Maybe<Scalars["String"]>;
    where?: Maybe<RootQueryToCategoryConnectionWhereArgs>;
};

/** The root entry point into the Graph */
export type RootQueryCategoryArgs = {
    id: Scalars["ID"];
};

/** The root entry point into the Graph */
export type RootQueryCommentArgs = {
    id: Scalars["ID"];
};

/** The root entry point into the Graph */
export type RootQueryCommentsArgs = {
    first?: Maybe<Scalars["Int"]>;
    last?: Maybe<Scalars["Int"]>;
    after?: Maybe<Scalars["String"]>;
    before?: Maybe<Scalars["String"]>;
    where?: Maybe<RootQueryToCommentConnectionWhereArgs>;
};

/** The root entry point into the Graph */
export type RootQueryDemoArgs = {
    id: Scalars["ID"];
};

/** The root entry point into the Graph */
export type RootQueryDemoByArgs = {
    id?: Maybe<Scalars["ID"]>;
    demoId?: Maybe<Scalars["Int"]>;
    uri?: Maybe<Scalars["String"]>;
    slug?: Maybe<Scalars["String"]>;
};

/** The root entry point into the Graph */
export type RootQueryDemoByPermalinkArgs = {
    permalink?: Maybe<Scalars["String"]>;
};

/** The root entry point into the Graph */
export type RootQueryDemosArgs = {
    first?: Maybe<Scalars["Int"]>;
    last?: Maybe<Scalars["Int"]>;
    after?: Maybe<Scalars["String"]>;
    before?: Maybe<Scalars["String"]>;
    where?: Maybe<RootQueryToDemoConnectionWhereArgs>;
};

/** The root entry point into the Graph */
export type RootQueryMediaItemArgs = {
    id: Scalars["ID"];
};

/** The root entry point into the Graph */
export type RootQueryMediaItemByArgs = {
    id?: Maybe<Scalars["ID"]>;
    mediaItemId?: Maybe<Scalars["Int"]>;
    uri?: Maybe<Scalars["String"]>;
    slug?: Maybe<Scalars["String"]>;
};

/** The root entry point into the Graph */
export type RootQueryMediaItemByPermalinkArgs = {
    permalink?: Maybe<Scalars["String"]>;
};

/** The root entry point into the Graph */
export type RootQueryMediaItemsArgs = {
    first?: Maybe<Scalars["Int"]>;
    last?: Maybe<Scalars["Int"]>;
    after?: Maybe<Scalars["String"]>;
    before?: Maybe<Scalars["String"]>;
    where?: Maybe<RootQueryToMediaItemConnectionWhereArgs>;
};

/** The root entry point into the Graph */
export type RootQueryMenuArgs = {
    id: Scalars["ID"];
};

/** The root entry point into the Graph */
export type RootQueryMenuItemsArgs = {
    first?: Maybe<Scalars["Int"]>;
    last?: Maybe<Scalars["Int"]>;
    after?: Maybe<Scalars["String"]>;
    before?: Maybe<Scalars["String"]>;
    where?: Maybe<RootQueryToMenuItemConnectionWhereArgs>;
};

/** The root entry point into the Graph */
export type RootQueryMenuItemArgs = {
    id: Scalars["ID"];
};

/** The root entry point into the Graph */
export type RootQueryMenusArgs = {
    first?: Maybe<Scalars["Int"]>;
    last?: Maybe<Scalars["Int"]>;
    after?: Maybe<Scalars["String"]>;
    before?: Maybe<Scalars["String"]>;
    where?: Maybe<RootQueryToMenuConnectionWhereArgs>;
};

/** The root entry point into the Graph */
export type RootQueryNodeArgs = {
    id: Scalars["ID"];
};

/** The root entry point into the Graph */
export type RootQueryPageArgs = {
    id: Scalars["ID"];
};

/** The root entry point into the Graph */
export type RootQueryPageByArgs = {
    id?: Maybe<Scalars["ID"]>;
    pageId?: Maybe<Scalars["Int"]>;
    uri?: Maybe<Scalars["String"]>;
};

/** The root entry point into the Graph */
export type RootQueryPageByPermalinkArgs = {
    permalink?: Maybe<Scalars["String"]>;
};

/** The root entry point into the Graph */
export type RootQueryPagesArgs = {
    first?: Maybe<Scalars["Int"]>;
    last?: Maybe<Scalars["Int"]>;
    after?: Maybe<Scalars["String"]>;
    before?: Maybe<Scalars["String"]>;
    where?: Maybe<RootQueryToPageConnectionWhereArgs>;
};

/** The root entry point into the Graph */
export type RootQueryPluginArgs = {
    id: Scalars["ID"];
};

/** The root entry point into the Graph */
export type RootQueryPluginsArgs = {
    first?: Maybe<Scalars["Int"]>;
    last?: Maybe<Scalars["Int"]>;
    after?: Maybe<Scalars["String"]>;
    before?: Maybe<Scalars["String"]>;
};

/** The root entry point into the Graph */
export type RootQueryPostArgs = {
    id: Scalars["ID"];
};

/** The root entry point into the Graph */
export type RootQueryPostByArgs = {
    id?: Maybe<Scalars["ID"]>;
    postId?: Maybe<Scalars["Int"]>;
    uri?: Maybe<Scalars["String"]>;
    slug?: Maybe<Scalars["String"]>;
};

/** The root entry point into the Graph */
export type RootQueryPostByPermalinkArgs = {
    permalink?: Maybe<Scalars["String"]>;
};

/** The root entry point into the Graph */
export type RootQueryPostsArgs = {
    first?: Maybe<Scalars["Int"]>;
    last?: Maybe<Scalars["Int"]>;
    after?: Maybe<Scalars["String"]>;
    before?: Maybe<Scalars["String"]>;
    where?: Maybe<RootQueryToPostConnectionWhereArgs>;
};

/** The root entry point into the Graph */
export type RootQueryRevisionArgs = {
    id: Scalars["ID"];
};

/** The root entry point into the Graph */
export type RootQueryRevisionByArgs = {
    id?: Maybe<Scalars["ID"]>;
    revisionId?: Maybe<Scalars["Int"]>;
    uri?: Maybe<Scalars["String"]>;
    slug?: Maybe<Scalars["String"]>;
};

/** The root entry point into the Graph */
export type RootQueryRevisionByPermalinkArgs = {
    permalink?: Maybe<Scalars["String"]>;
};

/** The root entry point into the Graph */
export type RootQueryRevisionsArgs = {
    first?: Maybe<Scalars["Int"]>;
    last?: Maybe<Scalars["Int"]>;
    after?: Maybe<Scalars["String"]>;
    before?: Maybe<Scalars["String"]>;
    where?: Maybe<RootQueryToRevisionConnectionWhereArgs>;
};

/** The root entry point into the Graph */
export type RootQueryTagArgs = {
    id: Scalars["ID"];
};

/** The root entry point into the Graph */
export type RootQueryTagsArgs = {
    first?: Maybe<Scalars["Int"]>;
    last?: Maybe<Scalars["Int"]>;
    after?: Maybe<Scalars["String"]>;
    before?: Maybe<Scalars["String"]>;
    where?: Maybe<RootQueryToTagConnectionWhereArgs>;
};

/** The root entry point into the Graph */
export type RootQueryThemeArgs = {
    id: Scalars["ID"];
};

/** The root entry point into the Graph */
export type RootQueryThemesArgs = {
    first?: Maybe<Scalars["Int"]>;
    last?: Maybe<Scalars["Int"]>;
    after?: Maybe<Scalars["String"]>;
    before?: Maybe<Scalars["String"]>;
};

/** The root entry point into the Graph */
export type RootQueryUserArgs = {
    id: Scalars["ID"];
};

/** The root entry point into the Graph */
export type RootQueryUserRolesArgs = {
    first?: Maybe<Scalars["Int"]>;
    last?: Maybe<Scalars["Int"]>;
    after?: Maybe<Scalars["String"]>;
    before?: Maybe<Scalars["String"]>;
};

/** The root entry point into the Graph */
export type RootQueryUserRoleArgs = {
    id: Scalars["ID"];
};

/** The root entry point into the Graph */
export type RootQueryUsersArgs = {
    first?: Maybe<Scalars["Int"]>;
    last?: Maybe<Scalars["Int"]>;
    after?: Maybe<Scalars["String"]>;
    before?: Maybe<Scalars["String"]>;
    where?: Maybe<RootQueryToUserConnectionWhereArgs>;
};

/** Connection between the RootQuery type and the RootQuery type */
export type RootQueryToCategoryConnection = {
    /** Edges for the RootQueryToCategoryConnection connection */
    edges?: Maybe<Array<Maybe<RootQueryToCategoryConnectionEdge>>>;
    /** The nodes of the connection, without the edges */
    nodes?: Maybe<Array<Maybe<Category>>>;
    /** Information about pagination in a connection. */
    pageInfo?: Maybe<WpPageInfo>;
    /** Information about the type of content being queried */
    taxonomyInfo?: Maybe<Taxonomy>;
};

/** An edge in a connection */
export type RootQueryToCategoryConnectionEdge = {
    /** A cursor for use in pagination */
    cursor?: Maybe<Scalars["String"]>;
    /** The item at the end of the edge */
    node?: Maybe<Category>;
};

/** Arguments for filtering the RootQueryToCategoryConnection connection */
export type RootQueryToCategoryConnectionWhereArgs = {
    /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
    cacheDomain?: Maybe<Scalars["String"]>;
    /** True to limit results to terms that have no children. This parameter has no
     * effect on non-hierarchical taxonomies. Default false.
     */
    childless?: Maybe<Scalars["Boolean"]>;
    /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
    childOf?: Maybe<Scalars["Int"]>;
    /** Retrieve terms where the description is LIKE the input value. Default empty. */
    descriptionLike?: Maybe<Scalars["String"]>;
    /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
    exclude?: Maybe<Array<Maybe<Scalars["ID"]>>>;
    /** Array of term ids to exclude along with all of their descendant terms. If
     * $include is non-empty, $exclude_tree is ignored. Default empty array.
     */
    excludeTree?: Maybe<Array<Maybe<Scalars["ID"]>>>;
    /** Whether to hide terms not assigned to any posts. Accepts true or false. Default true */
    hideEmpty?: Maybe<Scalars["Boolean"]>;
    /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
    hierarchical?: Maybe<Scalars["Boolean"]>;
    /** Array of term ids to include. Default empty array. */
    include?: Maybe<Array<Maybe<Scalars["ID"]>>>;
    /** Array of names to return term(s) for. Default empty. */
    name?: Maybe<Array<Maybe<Scalars["String"]>>>;
    /** Retrieve terms where the name is LIKE the input value. Default empty. */
    nameLike?: Maybe<Scalars["String"]>;
    /** Array of object IDs. Results will be limited to terms associated with these objects. */
    objectIds?: Maybe<Array<Maybe<Scalars["ID"]>>>;
    /** Field(s) to order terms by. Defaults to 'name'. */
    orderby?: Maybe<TermObjectsConnectionOrderbyEnum>;
    /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
    padCounts?: Maybe<Scalars["Boolean"]>;
    /** Parent term ID to retrieve direct-child terms of. Default empty. */
    parent?: Maybe<Scalars["Int"]>;
    /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
    search?: Maybe<Scalars["String"]>;
    /** Default false. If true, only the items connected to the source item will be
     * returned. If false, all items will be returned regardless of connection to the source
     */
    shouldOnlyIncludeConnectedItems?: Maybe<Scalars["Boolean"]>;
    /** Default false. If true, the connection will be output in a flat list instead
     * of the hierarchical list. So child terms will be output in the same level as
     * the parent terms
     */
    shouldOutputInFlatList?: Maybe<Scalars["Boolean"]>;
    /** Array of slugs to return term(s) for. Default empty. */
    slug?: Maybe<Array<Maybe<Scalars["String"]>>>;
    /** Array of term taxonomy IDs, to match when querying terms. */
    termTaxonomId?: Maybe<Array<Maybe<Scalars["ID"]>>>;
    /** Whether to prime meta caches for matched terms. Default true. */
    updateTermMetaCache?: Maybe<Scalars["Boolean"]>;
};

/** Connection between the RootQuery type and the RootQuery type */
export type RootQueryToCommentConnection = {
    /** Edges for the RootQueryToCommentConnection connection */
    edges?: Maybe<Array<Maybe<RootQueryToCommentConnectionEdge>>>;
    /** The nodes of the connection, without the edges */
    nodes?: Maybe<Array<Maybe<Comment>>>;
    /** Information about pagination in a connection. */
    pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type RootQueryToCommentConnectionEdge = {
    /** A cursor for use in pagination */
    cursor?: Maybe<Scalars["String"]>;
    /** The item at the end of the edge */
    node?: Maybe<Comment>;
};

/** Arguments for filtering the RootQueryToCommentConnection connection */
export type RootQueryToCommentConnectionWhereArgs = {
    /** Comment author email address. */
    authorEmail?: Maybe<Scalars["String"]>;
    /** Array of author IDs to include comments for. */
    authorIn?: Maybe<Array<Maybe<Scalars["ID"]>>>;
    /** Array of author IDs to exclude comments for. */
    authorNotIn?: Maybe<Array<Maybe<Scalars["ID"]>>>;
    /** Comment author URL. */
    authorUrl?: Maybe<Scalars["String"]>;
    /** Array of comment IDs to include. */
    commentIn?: Maybe<Array<Maybe<Scalars["ID"]>>>;
    /** Array of IDs of users whose unapproved comments will be returned by the
     * 							query regardless of status.
     */
    commentNotIn?: Maybe<Array<Maybe<Scalars["ID"]>>>;
    /** Include comments of a given type. */
    commentType?: Maybe<Scalars["String"]>;
    /** Include comments from a given array of comment types. */
    commentTypeIn?: Maybe<Array<Maybe<Scalars["String"]>>>;
    /** Exclude comments from a given array of comment types. */
    commentTypeNotIn?: Maybe<Scalars["String"]>;
    /** Content object author ID to limit results by. */
    contentAuthor?: Maybe<Array<Maybe<Scalars["ID"]>>>;
    /** Array of author IDs to retrieve comments for. */
    contentAuthorIn?: Maybe<Array<Maybe<Scalars["ID"]>>>;
    /** Array of author IDs *not* to retrieve comments for. */
    contentAuthorNotIn?: Maybe<Array<Maybe<Scalars["ID"]>>>;
    /** Limit results to those affiliated with a given content object
     * 							ID.
     */
    contentId?: Maybe<Scalars["ID"]>;
    /** Array of content object IDs to include affiliated comments
     * 							for.
     */
    contentIdIn?: Maybe<Array<Maybe<Scalars["ID"]>>>;
    /** Array of content object IDs to exclude affiliated comments
     * 							for.
     */
    contentIdNotIn?: Maybe<Array<Maybe<Scalars["ID"]>>>;
    /** Content object name to retrieve affiliated comments for. */
    contentName?: Maybe<Scalars["String"]>;
    /** Content Object parent ID to retrieve affiliated comments for. */
    contentParent?: Maybe<Scalars["Int"]>;
    /** Array of content object statuses to retrieve affiliated comments for.
     * 							Pass 'any' to match any value.
     */
    contentStatus?: Maybe<Array<Maybe<PostStatusEnum>>>;
    /** Content object type or array of types to retrieve affiliated comments for. Pass 'any' to match any value. */
    contentType?: Maybe<Array<Maybe<PostStatusEnum>>>;
    /** Array of author IDs to include comments for. */
    includeUnapproved?: Maybe<Array<Maybe<Scalars["ID"]>>>;
    /** Karma score to retrieve matching comments for. */
    karma?: Maybe<Scalars["Int"]>;
    /** The cardinality of the order of the connection */
    order?: Maybe<OrderEnum>;
    /** Field to order the comments by. */
    orderby?: Maybe<CommentsConnectionOrderbyEnum>;
    /** Parent ID of comment to retrieve children of. */
    parent?: Maybe<Scalars["Int"]>;
    /** Array of parent IDs of comments to retrieve children for. */
    parentIn?: Maybe<Array<Maybe<Scalars["ID"]>>>;
    /** Array of parent IDs of comments *not* to retrieve children
     * 							for.
     */
    parentNotIn?: Maybe<Array<Maybe<Scalars["ID"]>>>;
    /** Search term(s) to retrieve matching comments for. */
    search?: Maybe<Scalars["String"]>;
    /** Comment status to limit results by. */
    status?: Maybe<Scalars["String"]>;
    /** Include comments for a specific user ID. */
    userId?: Maybe<Scalars["ID"]>;
};

/** Connection between the RootQuery type and the RootQuery type */
export type RootQueryToDemoConnection = {
    /** Edges for the RootQueryToDemoConnection connection */
    edges?: Maybe<Array<Maybe<RootQueryToDemoConnectionEdge>>>;
    /** The nodes of the connection, without the edges */
    nodes?: Maybe<Array<Maybe<Demo>>>;
    /** Information about pagination in a connection. */
    pageInfo?: Maybe<WpPageInfo>;
    /** Information about the type of content being queried */
    postTypeInfo?: Maybe<PostType>;
};

/** An edge in a connection */
export type RootQueryToDemoConnectionEdge = {
    /** A cursor for use in pagination */
    cursor?: Maybe<Scalars["String"]>;
    /** The item at the end of the edge */
    node?: Maybe<Demo>;
};

/** Arguments for filtering the RootQueryToDemoConnection connection */
export type RootQueryToDemoConnectionWhereArgs = {
    /** The user that's connected as the author of the object. Use the
     * 							userId for the author object.
     */
    author?: Maybe<Scalars["Int"]>;
    /** Find objects connected to author(s) in the array of author's userIds */
    authorIn?: Maybe<Array<Maybe<Scalars["ID"]>>>;
    /** Find objects connected to the author by the author's nicename */
    authorName?: Maybe<Scalars["String"]>;
    /** Find objects NOT connected to author(s) in the array of author's
     * 							userIds
     */
    authorNotIn?: Maybe<Array<Maybe<Scalars["ID"]>>>;
    /** Category ID */
    categoryId?: Maybe<Scalars["Int"]>;
    /** Array of category IDs, used to display objects from one
     * 										category OR another
     */
    categoryIn?: Maybe<Array<Maybe<Scalars["ID"]>>>;
    /** Use Category Slug */
    categoryName?: Maybe<Scalars["String"]>;
    /** Array of category IDs, used to display objects from one
     * 										category OR another
     */
    categoryNotIn?: Maybe<Array<Maybe<Scalars["ID"]>>>;
    /** Filter the connection based on dates */
    dateQuery?: Maybe<DateQueryInput>;
    /** True for objects with passwords; False for objects without passwords;
     * 							null for all objects with or without passwords
     */
    hasPassword?: Maybe<Scalars["Boolean"]>;
    /** Specific ID of the object */
    id?: Maybe<Scalars["Int"]>;
    /** Array of IDs for the objects to retrieve */
    in?: Maybe<Array<Maybe<Scalars["ID"]>>>;
    /** Get objects with a specific mimeType property */
    mimeType?: Maybe<MimeTypeEnum>;
    /** Slug / post_name of the object */
    name?: Maybe<Scalars["String"]>;
    /** Specify objects to retrieve. Use slugs */
    nameIn?: Maybe<Array<Maybe<Scalars["String"]>>>;
    /** Specify IDs NOT to retrieve. If this is used in the same query as "in",
     * 							it will be ignored
     */
    notIn?: Maybe<Array<Maybe<Scalars["ID"]>>>;
    /** What paramater to use to order the objects by. */
    orderby?: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>;
    /** Use ID to return only children. Use 0 to return only top-level
     * 							items
     */
    parent?: Maybe<Scalars["String"]>;
    /** Specify objects whose parent is in an array */
    parentIn?: Maybe<Array<Maybe<Scalars["ID"]>>>;
    /** Specify posts whose parent is not in an array */
    parentNotIn?: Maybe<Array<Maybe<Scalars["ID"]>>>;
    /** Show posts with a specific password. */
    password?: Maybe<Scalars["String"]>;
    /** Show Posts based on a keyword search */
    search?: Maybe<Scalars["String"]>;
    stati?: Maybe<Array<Maybe<PostStatusEnum>>>;
    status?: Maybe<PostStatusEnum>;
    /** Tag Slug */
    tag?: Maybe<Scalars["String"]>;
    /** Use Tag ID */
    tagId?: Maybe<Scalars["String"]>;
    /** Array of tag IDs, used to display objects from one tag OR
     * 							another
     */
    tagIn?: Maybe<Array<Maybe<Scalars["ID"]>>>;
    /** Array of tag IDs, used to display objects from one tag OR
     * 							another
     */
    tagNotIn?: Maybe<Array<Maybe<Scalars["ID"]>>>;
    /** Array of tag slugs, used to display objects from one tag OR
     * 							another
     */
    tagSlugAnd?: Maybe<Array<Maybe<Scalars["String"]>>>;
    /** Array of tag slugs, used to exclude objects in specified
     * 							tags
     */
    tagSlugIn?: Maybe<Array<Maybe<Scalars["String"]>>>;
    taxQuery?: Maybe<RootQueryToDemoConnectionWhereArgsTaxQuery>;
    /** Title of the object */
    title?: Maybe<Scalars["String"]>;
};

export type RootQueryToDemoConnectionWhereArgsTaxArray = {
    taxonomy?: Maybe<TaxonomyEnum>;
    field?: Maybe<RootQueryToDemoConnectionWhereArgsTaxQueryField>;
    /** A list of term slugs */
    terms?: Maybe<Array<Maybe<Scalars["String"]>>>;
    /** Whether or not to include children for hierarchical
     * 											taxonomies. Defaults to false to improve performance (note that
     * 											this is opposite of the default for WP_Query).
     */
    includeChildren?: Maybe<Scalars["Boolean"]>;
    operator?: Maybe<RootQueryToDemoConnectionWhereArgsTaxQueryOperator>;
};

/** Query objects based on taxonomy parameters */
export type RootQueryToDemoConnectionWhereArgsTaxQuery = {
    relation?: Maybe<RelationEnum>;
    taxArray?: Maybe<Array<Maybe<RootQueryToDemoConnectionWhereArgsTaxArray>>>;
};

/** Which field to select taxonomy term by. Default value is "term_id" */
export enum RootQueryToDemoConnectionWhereArgsTaxQueryField {
    Id = "ID",
    Name = "NAME",
    Slug = "SLUG",
    Taxonomy_Id = "TAXONOMY_ID",
}

export enum RootQueryToDemoConnectionWhereArgsTaxQueryOperator {
    And = "AND",
    Exists = "EXISTS",
    In = "IN",
    Not_Exists = "NOT_EXISTS",
    Not_In = "NOT_IN",
}

/** Connection between the RootQuery type and the RootQuery type */
export type RootQueryToMediaItemConnection = {
    /** Edges for the RootQueryToMediaItemConnection connection */
    edges?: Maybe<Array<Maybe<RootQueryToMediaItemConnectionEdge>>>;
    /** The nodes of the connection, without the edges */
    nodes?: Maybe<Array<Maybe<MediaItem>>>;
    /** Information about pagination in a connection. */
    pageInfo?: Maybe<WpPageInfo>;
    /** Information about the type of content being queried */
    postTypeInfo?: Maybe<PostType>;
};

/** An edge in a connection */
export type RootQueryToMediaItemConnectionEdge = {
    /** A cursor for use in pagination */
    cursor?: Maybe<Scalars["String"]>;
    /** The item at the end of the edge */
    node?: Maybe<MediaItem>;
};

/** Arguments for filtering the RootQueryToMediaItemConnection connection */
export type RootQueryToMediaItemConnectionWhereArgs = {
    /** The user that's connected as the author of the object. Use the
     * 							userId for the author object.
     */
    author?: Maybe<Scalars["Int"]>;
    /** Find objects connected to author(s) in the array of author's userIds */
    authorIn?: Maybe<Array<Maybe<Scalars["ID"]>>>;
    /** Find objects connected to the author by the author's nicename */
    authorName?: Maybe<Scalars["String"]>;
    /** Find objects NOT connected to author(s) in the array of author's
     * 							userIds
     */
    authorNotIn?: Maybe<Array<Maybe<Scalars["ID"]>>>;
    /** Category ID */
    categoryId?: Maybe<Scalars["Int"]>;
    /** Array of category IDs, used to display objects from one
     * 										category OR another
     */
    categoryIn?: Maybe<Array<Maybe<Scalars["ID"]>>>;
    /** Use Category Slug */
    categoryName?: Maybe<Scalars["String"]>;
    /** Array of category IDs, used to display objects from one
     * 										category OR another
     */
    categoryNotIn?: Maybe<Array<Maybe<Scalars["ID"]>>>;
    /** Filter the connection based on dates */
    dateQuery?: Maybe<DateQueryInput>;
    /** True for objects with passwords; False for objects without passwords;
     * 							null for all objects with or without passwords
     */
    hasPassword?: Maybe<Scalars["Boolean"]>;
    /** Specific ID of the object */
    id?: Maybe<Scalars["Int"]>;
    /** Array of IDs for the objects to retrieve */
    in?: Maybe<Array<Maybe<Scalars["ID"]>>>;
    /** Get objects with a specific mimeType property */
    mimeType?: Maybe<MimeTypeEnum>;
    /** Slug / post_name of the object */
    name?: Maybe<Scalars["String"]>;
    /** Specify objects to retrieve. Use slugs */
    nameIn?: Maybe<Array<Maybe<Scalars["String"]>>>;
    /** Specify IDs NOT to retrieve. If this is used in the same query as "in",
     * 							it will be ignored
     */
    notIn?: Maybe<Array<Maybe<Scalars["ID"]>>>;
    /** What paramater to use to order the objects by. */
    orderby?: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>;
    /** Use ID to return only children. Use 0 to return only top-level
     * 							items
     */
    parent?: Maybe<Scalars["String"]>;
    /** Specify objects whose parent is in an array */
    parentIn?: Maybe<Array<Maybe<Scalars["ID"]>>>;
    /** Specify posts whose parent is not in an array */
    parentNotIn?: Maybe<Array<Maybe<Scalars["ID"]>>>;
    /** Show posts with a specific password. */
    password?: Maybe<Scalars["String"]>;
    /** Show Posts based on a keyword search */
    search?: Maybe<Scalars["String"]>;
    stati?: Maybe<Array<Maybe<PostStatusEnum>>>;
    status?: Maybe<PostStatusEnum>;
    /** Tag Slug */
    tag?: Maybe<Scalars["String"]>;
    /** Use Tag ID */
    tagId?: Maybe<Scalars["String"]>;
    /** Array of tag IDs, used to display objects from one tag OR
     * 							another
     */
    tagIn?: Maybe<Array<Maybe<Scalars["ID"]>>>;
    /** Array of tag IDs, used to display objects from one tag OR
     * 							another
     */
    tagNotIn?: Maybe<Array<Maybe<Scalars["ID"]>>>;
    /** Array of tag slugs, used to display objects from one tag OR
     * 							another
     */
    tagSlugAnd?: Maybe<Array<Maybe<Scalars["String"]>>>;
    /** Array of tag slugs, used to exclude objects in specified
     * 							tags
     */
    tagSlugIn?: Maybe<Array<Maybe<Scalars["String"]>>>;
    taxQuery?: Maybe<RootQueryToMediaItemConnectionWhereArgsTaxQuery>;
    /** Title of the object */
    title?: Maybe<Scalars["String"]>;
};

export type RootQueryToMediaItemConnectionWhereArgsTaxArray = {
    taxonomy?: Maybe<TaxonomyEnum>;
    field?: Maybe<RootQueryToMediaItemConnectionWhereArgsTaxQueryField>;
    /** A list of term slugs */
    terms?: Maybe<Array<Maybe<Scalars["String"]>>>;
    /** Whether or not to include children for hierarchical
     * 											taxonomies. Defaults to false to improve performance (note that
     * 											this is opposite of the default for WP_Query).
     */
    includeChildren?: Maybe<Scalars["Boolean"]>;
    operator?: Maybe<RootQueryToMediaItemConnectionWhereArgsTaxQueryOperator>;
};

/** Query objects based on taxonomy parameters */
export type RootQueryToMediaItemConnectionWhereArgsTaxQuery = {
    relation?: Maybe<RelationEnum>;
    taxArray?: Maybe<
        Array<Maybe<RootQueryToMediaItemConnectionWhereArgsTaxArray>>
    >;
};

/** Which field to select taxonomy term by. Default value is "term_id" */
export enum RootQueryToMediaItemConnectionWhereArgsTaxQueryField {
    Id = "ID",
    Name = "NAME",
    Slug = "SLUG",
    Taxonomy_Id = "TAXONOMY_ID",
}

export enum RootQueryToMediaItemConnectionWhereArgsTaxQueryOperator {
    And = "AND",
    Exists = "EXISTS",
    In = "IN",
    Not_Exists = "NOT_EXISTS",
    Not_In = "NOT_IN",
}

/** Connection between the RootQuery type and the RootQuery type */
export type RootQueryToMenuConnection = {
    /** Edges for the RootQueryToMenuConnection connection */
    edges?: Maybe<Array<Maybe<RootQueryToMenuConnectionEdge>>>;
    /** The nodes of the connection, without the edges */
    nodes?: Maybe<Array<Maybe<Menu>>>;
    /** Information about pagination in a connection. */
    pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type RootQueryToMenuConnectionEdge = {
    /** A cursor for use in pagination */
    cursor?: Maybe<Scalars["String"]>;
    /** The item at the end of the edge */
    node?: Maybe<Menu>;
};

/** Arguments for filtering the RootQueryToMenuConnection connection */
export type RootQueryToMenuConnectionWhereArgs = {
    /** The ID of the object */
    id?: Maybe<Scalars["Int"]>;
    /** The menu location for the menu being queried */
    location?: Maybe<MenuLocationEnum>;
    /** The slug of the menu to query items for */
    slug?: Maybe<Scalars["String"]>;
};

/** Connection between the RootQuery type and the RootQuery type */
export type RootQueryToMenuItemConnection = {
    /** Edges for the RootQueryToMenuItemConnection connection */
    edges?: Maybe<Array<Maybe<RootQueryToMenuItemConnectionEdge>>>;
    /** The nodes of the connection, without the edges */
    nodes?: Maybe<Array<Maybe<MenuItem>>>;
    /** Information about pagination in a connection. */
    pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type RootQueryToMenuItemConnectionEdge = {
    /** A cursor for use in pagination */
    cursor?: Maybe<Scalars["String"]>;
    /** The item at the end of the edge */
    node?: Maybe<MenuItem>;
};

/** Arguments for filtering the RootQueryToMenuItemConnection connection */
export type RootQueryToMenuItemConnectionWhereArgs = {
    /** The ID of the object */
    id?: Maybe<Scalars["Int"]>;
    /** The menu location for the menu being queried */
    location?: Maybe<MenuLocationEnum>;
};

/** Connection between the RootQuery type and the RootQuery type */
export type RootQueryToPageConnection = {
    /** Edges for the RootQueryToPageConnection connection */
    edges?: Maybe<Array<Maybe<RootQueryToPageConnectionEdge>>>;
    /** The nodes of the connection, without the edges */
    nodes?: Maybe<Array<Maybe<Page>>>;
    /** Information about pagination in a connection. */
    pageInfo?: Maybe<WpPageInfo>;
    /** Information about the type of content being queried */
    postTypeInfo?: Maybe<PostType>;
};

/** An edge in a connection */
export type RootQueryToPageConnectionEdge = {
    /** A cursor for use in pagination */
    cursor?: Maybe<Scalars["String"]>;
    /** The item at the end of the edge */
    node?: Maybe<Page>;
};

/** Arguments for filtering the RootQueryToPageConnection connection */
export type RootQueryToPageConnectionWhereArgs = {
    /** The user that's connected as the author of the object. Use the
     * 							userId for the author object.
     */
    author?: Maybe<Scalars["Int"]>;
    /** Find objects connected to author(s) in the array of author's userIds */
    authorIn?: Maybe<Array<Maybe<Scalars["ID"]>>>;
    /** Find objects connected to the author by the author's nicename */
    authorName?: Maybe<Scalars["String"]>;
    /** Find objects NOT connected to author(s) in the array of author's
     * 							userIds
     */
    authorNotIn?: Maybe<Array<Maybe<Scalars["ID"]>>>;
    /** Category ID */
    categoryId?: Maybe<Scalars["Int"]>;
    /** Array of category IDs, used to display objects from one
     * 										category OR another
     */
    categoryIn?: Maybe<Array<Maybe<Scalars["ID"]>>>;
    /** Use Category Slug */
    categoryName?: Maybe<Scalars["String"]>;
    /** Array of category IDs, used to display objects from one
     * 										category OR another
     */
    categoryNotIn?: Maybe<Array<Maybe<Scalars["ID"]>>>;
    /** Filter the connection based on dates */
    dateQuery?: Maybe<DateQueryInput>;
    /** True for objects with passwords; False for objects without passwords;
     * 							null for all objects with or without passwords
     */
    hasPassword?: Maybe<Scalars["Boolean"]>;
    /** Specific ID of the object */
    id?: Maybe<Scalars["Int"]>;
    /** Array of IDs for the objects to retrieve */
    in?: Maybe<Array<Maybe<Scalars["ID"]>>>;
    /** Get objects with a specific mimeType property */
    mimeType?: Maybe<MimeTypeEnum>;
    /** Slug / post_name of the object */
    name?: Maybe<Scalars["String"]>;
    /** Specify objects to retrieve. Use slugs */
    nameIn?: Maybe<Array<Maybe<Scalars["String"]>>>;
    /** Specify IDs NOT to retrieve. If this is used in the same query as "in",
     * 							it will be ignored
     */
    notIn?: Maybe<Array<Maybe<Scalars["ID"]>>>;
    /** What paramater to use to order the objects by. */
    orderby?: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>;
    /** Use ID to return only children. Use 0 to return only top-level
     * 							items
     */
    parent?: Maybe<Scalars["String"]>;
    /** Specify objects whose parent is in an array */
    parentIn?: Maybe<Array<Maybe<Scalars["ID"]>>>;
    /** Specify posts whose parent is not in an array */
    parentNotIn?: Maybe<Array<Maybe<Scalars["ID"]>>>;
    /** Show posts with a specific password. */
    password?: Maybe<Scalars["String"]>;
    /** Show Posts based on a keyword search */
    search?: Maybe<Scalars["String"]>;
    stati?: Maybe<Array<Maybe<PostStatusEnum>>>;
    status?: Maybe<PostStatusEnum>;
    /** Tag Slug */
    tag?: Maybe<Scalars["String"]>;
    /** Use Tag ID */
    tagId?: Maybe<Scalars["String"]>;
    /** Array of tag IDs, used to display objects from one tag OR
     * 							another
     */
    tagIn?: Maybe<Array<Maybe<Scalars["ID"]>>>;
    /** Array of tag IDs, used to display objects from one tag OR
     * 							another
     */
    tagNotIn?: Maybe<Array<Maybe<Scalars["ID"]>>>;
    /** Array of tag slugs, used to display objects from one tag OR
     * 							another
     */
    tagSlugAnd?: Maybe<Array<Maybe<Scalars["String"]>>>;
    /** Array of tag slugs, used to exclude objects in specified
     * 							tags
     */
    tagSlugIn?: Maybe<Array<Maybe<Scalars["String"]>>>;
    taxQuery?: Maybe<RootQueryToPageConnectionWhereArgsTaxQuery>;
    /** Title of the object */
    title?: Maybe<Scalars["String"]>;
};

export type RootQueryToPageConnectionWhereArgsTaxArray = {
    taxonomy?: Maybe<TaxonomyEnum>;
    field?: Maybe<RootQueryToPageConnectionWhereArgsTaxQueryField>;
    /** A list of term slugs */
    terms?: Maybe<Array<Maybe<Scalars["String"]>>>;
    /** Whether or not to include children for hierarchical
     * 											taxonomies. Defaults to false to improve performance (note that
     * 											this is opposite of the default for WP_Query).
     */
    includeChildren?: Maybe<Scalars["Boolean"]>;
    operator?: Maybe<RootQueryToPageConnectionWhereArgsTaxQueryOperator>;
};

/** Query objects based on taxonomy parameters */
export type RootQueryToPageConnectionWhereArgsTaxQuery = {
    relation?: Maybe<RelationEnum>;
    taxArray?: Maybe<Array<Maybe<RootQueryToPageConnectionWhereArgsTaxArray>>>;
};

/** Which field to select taxonomy term by. Default value is "term_id" */
export enum RootQueryToPageConnectionWhereArgsTaxQueryField {
    Id = "ID",
    Name = "NAME",
    Slug = "SLUG",
    Taxonomy_Id = "TAXONOMY_ID",
}

export enum RootQueryToPageConnectionWhereArgsTaxQueryOperator {
    And = "AND",
    Exists = "EXISTS",
    In = "IN",
    Not_Exists = "NOT_EXISTS",
    Not_In = "NOT_IN",
}

/** Connection between the RootQuery type and the RootQuery type */
export type RootQueryToPluginConnection = {
    /** Edges for the RootQueryToPluginConnection connection */
    edges?: Maybe<Array<Maybe<RootQueryToPluginConnectionEdge>>>;
    /** The nodes of the connection, without the edges */
    nodes?: Maybe<Array<Maybe<Plugin>>>;
    /** Information about pagination in a connection. */
    pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type RootQueryToPluginConnectionEdge = {
    /** A cursor for use in pagination */
    cursor?: Maybe<Scalars["String"]>;
    /** The item at the end of the edge */
    node?: Maybe<Plugin>;
};

/** Connection between the RootQuery type and the RootQuery type */
export type RootQueryToPostConnection = {
    /** Edges for the RootQueryToPostConnection connection */
    edges?: Maybe<Array<Maybe<RootQueryToPostConnectionEdge>>>;
    /** The nodes of the connection, without the edges */
    nodes?: Maybe<Array<Maybe<Post>>>;
    /** Information about pagination in a connection. */
    pageInfo?: Maybe<WpPageInfo>;
    /** Information about the type of content being queried */
    postTypeInfo?: Maybe<PostType>;
};

/** An edge in a connection */
export type RootQueryToPostConnectionEdge = {
    /** A cursor for use in pagination */
    cursor?: Maybe<Scalars["String"]>;
    /** The item at the end of the edge */
    node?: Maybe<Post>;
};

/** Arguments for filtering the RootQueryToPostConnection connection */
export type RootQueryToPostConnectionWhereArgs = {
    /** The user that's connected as the author of the object. Use the
     * 							userId for the author object.
     */
    author?: Maybe<Scalars["Int"]>;
    /** Find objects connected to author(s) in the array of author's userIds */
    authorIn?: Maybe<Array<Maybe<Scalars["ID"]>>>;
    /** Find objects connected to the author by the author's nicename */
    authorName?: Maybe<Scalars["String"]>;
    /** Find objects NOT connected to author(s) in the array of author's
     * 							userIds
     */
    authorNotIn?: Maybe<Array<Maybe<Scalars["ID"]>>>;
    /** Category ID */
    categoryId?: Maybe<Scalars["Int"]>;
    /** Array of category IDs, used to display objects from one
     * 										category OR another
     */
    categoryIn?: Maybe<Array<Maybe<Scalars["ID"]>>>;
    /** Use Category Slug */
    categoryName?: Maybe<Scalars["String"]>;
    /** Array of category IDs, used to display objects from one
     * 										category OR another
     */
    categoryNotIn?: Maybe<Array<Maybe<Scalars["ID"]>>>;
    /** Filter the connection based on dates */
    dateQuery?: Maybe<DateQueryInput>;
    /** True for objects with passwords; False for objects without passwords;
     * 							null for all objects with or without passwords
     */
    hasPassword?: Maybe<Scalars["Boolean"]>;
    /** Specific ID of the object */
    id?: Maybe<Scalars["Int"]>;
    /** Array of IDs for the objects to retrieve */
    in?: Maybe<Array<Maybe<Scalars["ID"]>>>;
    /** Get objects with a specific mimeType property */
    mimeType?: Maybe<MimeTypeEnum>;
    /** Slug / post_name of the object */
    name?: Maybe<Scalars["String"]>;
    /** Specify objects to retrieve. Use slugs */
    nameIn?: Maybe<Array<Maybe<Scalars["String"]>>>;
    /** Specify IDs NOT to retrieve. If this is used in the same query as "in",
     * 							it will be ignored
     */
    notIn?: Maybe<Array<Maybe<Scalars["ID"]>>>;
    /** What paramater to use to order the objects by. */
    orderby?: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>;
    /** Use ID to return only children. Use 0 to return only top-level
     * 							items
     */
    parent?: Maybe<Scalars["String"]>;
    /** Specify objects whose parent is in an array */
    parentIn?: Maybe<Array<Maybe<Scalars["ID"]>>>;
    /** Specify posts whose parent is not in an array */
    parentNotIn?: Maybe<Array<Maybe<Scalars["ID"]>>>;
    /** Show posts with a specific password. */
    password?: Maybe<Scalars["String"]>;
    /** Show Posts based on a keyword search */
    search?: Maybe<Scalars["String"]>;
    stati?: Maybe<Array<Maybe<PostStatusEnum>>>;
    status?: Maybe<PostStatusEnum>;
    /** Tag Slug */
    tag?: Maybe<Scalars["String"]>;
    /** Use Tag ID */
    tagId?: Maybe<Scalars["String"]>;
    /** Array of tag IDs, used to display objects from one tag OR
     * 							another
     */
    tagIn?: Maybe<Array<Maybe<Scalars["ID"]>>>;
    /** Array of tag IDs, used to display objects from one tag OR
     * 							another
     */
    tagNotIn?: Maybe<Array<Maybe<Scalars["ID"]>>>;
    /** Array of tag slugs, used to display objects from one tag OR
     * 							another
     */
    tagSlugAnd?: Maybe<Array<Maybe<Scalars["String"]>>>;
    /** Array of tag slugs, used to exclude objects in specified
     * 							tags
     */
    tagSlugIn?: Maybe<Array<Maybe<Scalars["String"]>>>;
    taxQuery?: Maybe<RootQueryToPostConnectionWhereArgsTaxQuery>;
    /** Title of the object */
    title?: Maybe<Scalars["String"]>;
};

export type RootQueryToPostConnectionWhereArgsTaxArray = {
    taxonomy?: Maybe<TaxonomyEnum>;
    field?: Maybe<RootQueryToPostConnectionWhereArgsTaxQueryField>;
    /** A list of term slugs */
    terms?: Maybe<Array<Maybe<Scalars["String"]>>>;
    /** Whether or not to include children for hierarchical
     * 											taxonomies. Defaults to false to improve performance (note that
     * 											this is opposite of the default for WP_Query).
     */
    includeChildren?: Maybe<Scalars["Boolean"]>;
    operator?: Maybe<RootQueryToPostConnectionWhereArgsTaxQueryOperator>;
};

/** Query objects based on taxonomy parameters */
export type RootQueryToPostConnectionWhereArgsTaxQuery = {
    relation?: Maybe<RelationEnum>;
    taxArray?: Maybe<Array<Maybe<RootQueryToPostConnectionWhereArgsTaxArray>>>;
};

/** Which field to select taxonomy term by. Default value is "term_id" */
export enum RootQueryToPostConnectionWhereArgsTaxQueryField {
    Id = "ID",
    Name = "NAME",
    Slug = "SLUG",
    Taxonomy_Id = "TAXONOMY_ID",
}

export enum RootQueryToPostConnectionWhereArgsTaxQueryOperator {
    And = "AND",
    Exists = "EXISTS",
    In = "IN",
    Not_Exists = "NOT_EXISTS",
    Not_In = "NOT_IN",
}

/** Connection between the RootQuery type and the RootQuery type */
export type RootQueryToRevisionConnection = {
    /** Edges for the RootQueryToRevisionConnection connection */
    edges?: Maybe<Array<Maybe<RootQueryToRevisionConnectionEdge>>>;
    /** The nodes of the connection, without the edges */
    nodes?: Maybe<Array<Maybe<Revision>>>;
    /** Information about pagination in a connection. */
    pageInfo?: Maybe<WpPageInfo>;
    /** Information about the type of content being queried */
    postTypeInfo?: Maybe<PostType>;
};

/** An edge in a connection */
export type RootQueryToRevisionConnectionEdge = {
    /** A cursor for use in pagination */
    cursor?: Maybe<Scalars["String"]>;
    /** The item at the end of the edge */
    node?: Maybe<Revision>;
};

/** Arguments for filtering the RootQueryToRevisionConnection connection */
export type RootQueryToRevisionConnectionWhereArgs = {
    /** The user that's connected as the author of the object. Use the
     * 							userId for the author object.
     */
    author?: Maybe<Scalars["Int"]>;
    /** Find objects connected to author(s) in the array of author's userIds */
    authorIn?: Maybe<Array<Maybe<Scalars["ID"]>>>;
    /** Find objects connected to the author by the author's nicename */
    authorName?: Maybe<Scalars["String"]>;
    /** Find objects NOT connected to author(s) in the array of author's
     * 							userIds
     */
    authorNotIn?: Maybe<Array<Maybe<Scalars["ID"]>>>;
    /** Category ID */
    categoryId?: Maybe<Scalars["Int"]>;
    /** Array of category IDs, used to display objects from one
     * 										category OR another
     */
    categoryIn?: Maybe<Array<Maybe<Scalars["ID"]>>>;
    /** Use Category Slug */
    categoryName?: Maybe<Scalars["String"]>;
    /** Array of category IDs, used to display objects from one
     * 										category OR another
     */
    categoryNotIn?: Maybe<Array<Maybe<Scalars["ID"]>>>;
    /** Filter the connection based on dates */
    dateQuery?: Maybe<DateQueryInput>;
    /** True for objects with passwords; False for objects without passwords;
     * 							null for all objects with or without passwords
     */
    hasPassword?: Maybe<Scalars["Boolean"]>;
    /** Specific ID of the object */
    id?: Maybe<Scalars["Int"]>;
    /** Array of IDs for the objects to retrieve */
    in?: Maybe<Array<Maybe<Scalars["ID"]>>>;
    /** Get objects with a specific mimeType property */
    mimeType?: Maybe<MimeTypeEnum>;
    /** Slug / post_name of the object */
    name?: Maybe<Scalars["String"]>;
    /** Specify objects to retrieve. Use slugs */
    nameIn?: Maybe<Array<Maybe<Scalars["String"]>>>;
    /** Specify IDs NOT to retrieve. If this is used in the same query as "in",
     * 							it will be ignored
     */
    notIn?: Maybe<Array<Maybe<Scalars["ID"]>>>;
    /** What paramater to use to order the objects by. */
    orderby?: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>;
    /** Use ID to return only children. Use 0 to return only top-level
     * 							items
     */
    parent?: Maybe<Scalars["String"]>;
    /** Specify objects whose parent is in an array */
    parentIn?: Maybe<Array<Maybe<Scalars["ID"]>>>;
    /** Specify posts whose parent is not in an array */
    parentNotIn?: Maybe<Array<Maybe<Scalars["ID"]>>>;
    /** Show posts with a specific password. */
    password?: Maybe<Scalars["String"]>;
    /** Show Posts based on a keyword search */
    search?: Maybe<Scalars["String"]>;
    stati?: Maybe<Array<Maybe<PostStatusEnum>>>;
    status?: Maybe<PostStatusEnum>;
    /** Tag Slug */
    tag?: Maybe<Scalars["String"]>;
    /** Use Tag ID */
    tagId?: Maybe<Scalars["String"]>;
    /** Array of tag IDs, used to display objects from one tag OR
     * 							another
     */
    tagIn?: Maybe<Array<Maybe<Scalars["ID"]>>>;
    /** Array of tag IDs, used to display objects from one tag OR
     * 							another
     */
    tagNotIn?: Maybe<Array<Maybe<Scalars["ID"]>>>;
    /** Array of tag slugs, used to display objects from one tag OR
     * 							another
     */
    tagSlugAnd?: Maybe<Array<Maybe<Scalars["String"]>>>;
    /** Array of tag slugs, used to exclude objects in specified
     * 							tags
     */
    tagSlugIn?: Maybe<Array<Maybe<Scalars["String"]>>>;
    taxQuery?: Maybe<RootQueryToRevisionConnectionWhereArgsTaxQuery>;
    /** Title of the object */
    title?: Maybe<Scalars["String"]>;
};

export type RootQueryToRevisionConnectionWhereArgsTaxArray = {
    taxonomy?: Maybe<TaxonomyEnum>;
    field?: Maybe<RootQueryToRevisionConnectionWhereArgsTaxQueryField>;
    /** A list of term slugs */
    terms?: Maybe<Array<Maybe<Scalars["String"]>>>;
    /** Whether or not to include children for hierarchical
     * 											taxonomies. Defaults to false to improve performance (note that
     * 											this is opposite of the default for WP_Query).
     */
    includeChildren?: Maybe<Scalars["Boolean"]>;
    operator?: Maybe<RootQueryToRevisionConnectionWhereArgsTaxQueryOperator>;
};

/** Query objects based on taxonomy parameters */
export type RootQueryToRevisionConnectionWhereArgsTaxQuery = {
    relation?: Maybe<RelationEnum>;
    taxArray?: Maybe<
        Array<Maybe<RootQueryToRevisionConnectionWhereArgsTaxArray>>
    >;
};

/** Which field to select taxonomy term by. Default value is "term_id" */
export enum RootQueryToRevisionConnectionWhereArgsTaxQueryField {
    Id = "ID",
    Name = "NAME",
    Slug = "SLUG",
    Taxonomy_Id = "TAXONOMY_ID",
}

export enum RootQueryToRevisionConnectionWhereArgsTaxQueryOperator {
    And = "AND",
    Exists = "EXISTS",
    In = "IN",
    Not_Exists = "NOT_EXISTS",
    Not_In = "NOT_IN",
}

/** Connection between the RootQuery type and the RootQuery type */
export type RootQueryToTagConnection = {
    /** Edges for the RootQueryToTagConnection connection */
    edges?: Maybe<Array<Maybe<RootQueryToTagConnectionEdge>>>;
    /** The nodes of the connection, without the edges */
    nodes?: Maybe<Array<Maybe<Tag>>>;
    /** Information about pagination in a connection. */
    pageInfo?: Maybe<WpPageInfo>;
    /** Information about the type of content being queried */
    taxonomyInfo?: Maybe<Taxonomy>;
};

/** An edge in a connection */
export type RootQueryToTagConnectionEdge = {
    /** A cursor for use in pagination */
    cursor?: Maybe<Scalars["String"]>;
    /** The item at the end of the edge */
    node?: Maybe<Tag>;
};

/** Arguments for filtering the RootQueryToTagConnection connection */
export type RootQueryToTagConnectionWhereArgs = {
    /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
    cacheDomain?: Maybe<Scalars["String"]>;
    /** True to limit results to terms that have no children. This parameter has no
     * effect on non-hierarchical taxonomies. Default false.
     */
    childless?: Maybe<Scalars["Boolean"]>;
    /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
    childOf?: Maybe<Scalars["Int"]>;
    /** Retrieve terms where the description is LIKE the input value. Default empty. */
    descriptionLike?: Maybe<Scalars["String"]>;
    /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
    exclude?: Maybe<Array<Maybe<Scalars["ID"]>>>;
    /** Array of term ids to exclude along with all of their descendant terms. If
     * $include is non-empty, $exclude_tree is ignored. Default empty array.
     */
    excludeTree?: Maybe<Array<Maybe<Scalars["ID"]>>>;
    /** Whether to hide terms not assigned to any posts. Accepts true or false. Default true */
    hideEmpty?: Maybe<Scalars["Boolean"]>;
    /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
    hierarchical?: Maybe<Scalars["Boolean"]>;
    /** Array of term ids to include. Default empty array. */
    include?: Maybe<Array<Maybe<Scalars["ID"]>>>;
    /** Array of names to return term(s) for. Default empty. */
    name?: Maybe<Array<Maybe<Scalars["String"]>>>;
    /** Retrieve terms where the name is LIKE the input value. Default empty. */
    nameLike?: Maybe<Scalars["String"]>;
    /** Array of object IDs. Results will be limited to terms associated with these objects. */
    objectIds?: Maybe<Array<Maybe<Scalars["ID"]>>>;
    /** Field(s) to order terms by. Defaults to 'name'. */
    orderby?: Maybe<TermObjectsConnectionOrderbyEnum>;
    /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
    padCounts?: Maybe<Scalars["Boolean"]>;
    /** Parent term ID to retrieve direct-child terms of. Default empty. */
    parent?: Maybe<Scalars["Int"]>;
    /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
    search?: Maybe<Scalars["String"]>;
    /** Default false. If true, only the items connected to the source item will be
     * returned. If false, all items will be returned regardless of connection to the source
     */
    shouldOnlyIncludeConnectedItems?: Maybe<Scalars["Boolean"]>;
    /** Default false. If true, the connection will be output in a flat list instead
     * of the hierarchical list. So child terms will be output in the same level as
     * the parent terms
     */
    shouldOutputInFlatList?: Maybe<Scalars["Boolean"]>;
    /** Array of slugs to return term(s) for. Default empty. */
    slug?: Maybe<Array<Maybe<Scalars["String"]>>>;
    /** Array of term taxonomy IDs, to match when querying terms. */
    termTaxonomId?: Maybe<Array<Maybe<Scalars["ID"]>>>;
    /** Whether to prime meta caches for matched terms. Default true. */
    updateTermMetaCache?: Maybe<Scalars["Boolean"]>;
};

/** Connection between the RootQuery type and the RootQuery type */
export type RootQueryToThemeConnection = {
    /** Edges for the RootQueryToThemeConnection connection */
    edges?: Maybe<Array<Maybe<RootQueryToThemeConnectionEdge>>>;
    /** The nodes of the connection, without the edges */
    nodes?: Maybe<Array<Maybe<Theme>>>;
    /** Information about pagination in a connection. */
    pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type RootQueryToThemeConnectionEdge = {
    /** A cursor for use in pagination */
    cursor?: Maybe<Scalars["String"]>;
    /** The item at the end of the edge */
    node?: Maybe<Theme>;
};

/** Connection between the RootQuery type and the RootQuery type */
export type RootQueryToUserConnection = {
    /** Edges for the RootQueryToUserConnection connection */
    edges?: Maybe<Array<Maybe<RootQueryToUserConnectionEdge>>>;
    /** The nodes of the connection, without the edges */
    nodes?: Maybe<Array<Maybe<User>>>;
    /** Information about pagination in a connection. */
    pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type RootQueryToUserConnectionEdge = {
    /** A cursor for use in pagination */
    cursor?: Maybe<Scalars["String"]>;
    /** The item at the end of the edge */
    node?: Maybe<User>;
};

/** Arguments for filtering the RootQueryToUserConnection connection */
export type RootQueryToUserConnectionWhereArgs = {
    /** Array of IDs of users whose unapproved comments will be returned by the query regardless of status. */
    exclude?: Maybe<Array<Maybe<Scalars["Int"]>>>;
    /** Pass an array of post types to filter results to users who have published posts in those post types. */
    hasPublishedPosts?: Maybe<Array<Maybe<PostTypeEnum>>>;
    /** Array of comment IDs to include. */
    include?: Maybe<Array<Maybe<Scalars["Int"]>>>;
    /** The user login. */
    login?: Maybe<Scalars["String"]>;
    /** An array of logins to include. Users matching one of these logins will be included in results. */
    loginIn?: Maybe<Scalars["Int"]>;
    /** An array of logins to exclude. Users matching one of these logins will not be included in results. */
    loginNotIn?: Maybe<Scalars["Int"]>;
    /** The user nicename. */
    nicename?: Maybe<Scalars["String"]>;
    /** An array of nicenames to include. Users matching one of these nicenames will be included in results. */
    nicenameIn?: Maybe<Array<Maybe<Scalars["String"]>>>;
    /** An array of nicenames to exclude. Users matching one of these nicenames will not be included in results. */
    nicenameNotIn?: Maybe<Array<Maybe<Scalars["String"]>>>;
    /** An array of role names that users must match to be included in results. Note
     * that this is an inclusive list: users must match *each* role.
     */
    role?: Maybe<UserRoleEnum>;
    /** An array of role names. Matched users must have at least one of these roles. */
    roleIn?: Maybe<Array<Maybe<UserRoleEnum>>>;
    /** An array of role names to exclude. Users matching one or more of these roles will not be included in results. */
    roleNotIn?: Maybe<Array<Maybe<UserRoleEnum>>>;
    /** Search keyword. Searches for possible string matches on columns. When
     * "searchColumns" is left empty, it tries to determine which column to search in
     * based on search string.
     */
    search?: Maybe<Scalars["String"]>;
    /** Array of column names to be searched. Accepts 'ID', 'login', 'nicename', 'email', 'url'. */
    searchColumns?: Maybe<Array<Maybe<UsersConnectionSearchColumnEnum>>>;
};

/** Connection between the RootQuery type and the RootQuery type */
export type RootQueryToUserRoleConnection = {
    /** Edges for the RootQueryToUserRoleConnection connection */
    edges?: Maybe<Array<Maybe<RootQueryToUserRoleConnectionEdge>>>;
    /** The nodes of the connection, without the edges */
    nodes?: Maybe<Array<Maybe<UserRole>>>;
    /** Information about pagination in a connection. */
    pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type RootQueryToUserRoleConnectionEdge = {
    /** A cursor for use in pagination */
    cursor?: Maybe<Scalars["String"]>;
    /** The item at the end of the edge */
    node?: Maybe<UserRole>;
};

/** Input for the sendPasswordResetEmail mutation */
export type SendPasswordResetEmailInput = {
    clientMutationId: Scalars["String"];
    /** A string that contains the user's username or email address. */
    username: Scalars["String"];
};

/** The payload for the sendPasswordResetEmail mutation */
export type SendPasswordResetEmailPayload = {
    clientMutationId: Scalars["String"];
    /** The user that the password reset email was sent to */
    user?: Maybe<User>;
};

/** All of the registered settings */
export type Settings = {
    /** Allow people to post comments on new articles. */
    discussionSettingsDefaultCommentStatus?: Maybe<Scalars["String"]>;
    /** Allow link notifications from other blogs (pingbacks and trackbacks) on new articles. */
    discussionSettingsDefaultPingStatus?: Maybe<Scalars["String"]>;
    /** A date format for all date strings. */
    generalSettingsDateFormat?: Maybe<Scalars["String"]>;
    /** Site tagline. */
    generalSettingsDescription?: Maybe<Scalars["String"]>;
    /** This address is used for admin purposes, like new user notification. */
    generalSettingsEmail?: Maybe<Scalars["String"]>;
    /** WordPress locale code. */
    generalSettingsLanguage?: Maybe<Scalars["String"]>;
    /** A day number of the week that the week should start on. */
    generalSettingsStartOfWeek?: Maybe<Scalars["Int"]>;
    /** A time format for all time strings. */
    generalSettingsTimeFormat?: Maybe<Scalars["String"]>;
    /** A city in the same timezone as you. */
    generalSettingsTimezone?: Maybe<Scalars["String"]>;
    /** Site title. */
    generalSettingsTitle?: Maybe<Scalars["String"]>;
    /** Site URL. */
    generalSettingsUrl?: Maybe<Scalars["String"]>;
    /** Blog pages show at most. */
    readingSettingsPostsPerPage?: Maybe<Scalars["Int"]>;
    /** Default post category. */
    writingSettingsDefaultCategory?: Maybe<Scalars["Int"]>;
    /** Default post format. */
    writingSettingsDefaultPostFormat?: Maybe<Scalars["String"]>;
    /** Convert emoticons like :-) and :-P to graphics on display. */
    writingSettingsUseSmilies?: Maybe<Scalars["Boolean"]>;
};

/** The tag type */
export type Tag = Node & {
    /** The number of objects connected to the object */
    count?: Maybe<Scalars["Int"]>;
    /** The description of the object */
    description?: Maybe<Scalars["String"]>;
    /** The global ID for the post_tag */
    id: Scalars["ID"];
    /** The link to the term */
    link?: Maybe<Scalars["String"]>;
    /** The human friendly name of the object. */
    name?: Maybe<Scalars["String"]>;
    /** Connection between the tag type and the tag type */
    posts?: Maybe<TagToPostConnection>;
    /** An alphanumeric identifier for the object unique to its type. */
    slug?: Maybe<Scalars["String"]>;
    /** The id field matches the WP_Post-&gt;ID field. */
    tagId?: Maybe<Scalars["Int"]>;
    /** The name of the taxonomy this term belongs to */
    taxonomy?: Maybe<Taxonomy>;
    /** The ID of the term group that this term object belongs to */
    termGroupId?: Maybe<Scalars["Int"]>;
    /** The taxonomy ID that the object is associated with */
    termTaxonomyId?: Maybe<Scalars["Int"]>;
};

/** The tag type */
export type TagPostsArgs = {
    first?: Maybe<Scalars["Int"]>;
    last?: Maybe<Scalars["Int"]>;
    after?: Maybe<Scalars["String"]>;
    before?: Maybe<Scalars["String"]>;
    where?: Maybe<TagToPostConnectionWhereArgs>;
};

/** Connection between the tag type and the tag type */
export type TagToPostConnection = {
    /** Edges for the TagToPostConnection connection */
    edges?: Maybe<Array<Maybe<TagToPostConnectionEdge>>>;
    /** The nodes of the connection, without the edges */
    nodes?: Maybe<Array<Maybe<Post>>>;
    /** Information about pagination in a connection. */
    pageInfo?: Maybe<WpPageInfo>;
    /** Information about the type of content being queried */
    postTypeInfo?: Maybe<PostType>;
};

/** An edge in a connection */
export type TagToPostConnectionEdge = {
    /** A cursor for use in pagination */
    cursor?: Maybe<Scalars["String"]>;
    /** The item at the end of the edge */
    node?: Maybe<Post>;
};

/** Arguments for filtering the TagToPostConnection connection */
export type TagToPostConnectionWhereArgs = {
    /** The user that's connected as the author of the object. Use the
     * 							userId for the author object.
     */
    author?: Maybe<Scalars["Int"]>;
    /** Find objects connected to author(s) in the array of author's userIds */
    authorIn?: Maybe<Array<Maybe<Scalars["ID"]>>>;
    /** Find objects connected to the author by the author's nicename */
    authorName?: Maybe<Scalars["String"]>;
    /** Find objects NOT connected to author(s) in the array of author's
     * 							userIds
     */
    authorNotIn?: Maybe<Array<Maybe<Scalars["ID"]>>>;
    /** Category ID */
    categoryId?: Maybe<Scalars["Int"]>;
    /** Array of category IDs, used to display objects from one
     * 										category OR another
     */
    categoryIn?: Maybe<Array<Maybe<Scalars["ID"]>>>;
    /** Use Category Slug */
    categoryName?: Maybe<Scalars["String"]>;
    /** Array of category IDs, used to display objects from one
     * 										category OR another
     */
    categoryNotIn?: Maybe<Array<Maybe<Scalars["ID"]>>>;
    /** Filter the connection based on dates */
    dateQuery?: Maybe<DateQueryInput>;
    /** True for objects with passwords; False for objects without passwords;
     * 							null for all objects with or without passwords
     */
    hasPassword?: Maybe<Scalars["Boolean"]>;
    /** Specific ID of the object */
    id?: Maybe<Scalars["Int"]>;
    /** Array of IDs for the objects to retrieve */
    in?: Maybe<Array<Maybe<Scalars["ID"]>>>;
    /** Get objects with a specific mimeType property */
    mimeType?: Maybe<MimeTypeEnum>;
    /** Slug / post_name of the object */
    name?: Maybe<Scalars["String"]>;
    /** Specify objects to retrieve. Use slugs */
    nameIn?: Maybe<Array<Maybe<Scalars["String"]>>>;
    /** Specify IDs NOT to retrieve. If this is used in the same query as "in",
     * 							it will be ignored
     */
    notIn?: Maybe<Array<Maybe<Scalars["ID"]>>>;
    /** What paramater to use to order the objects by. */
    orderby?: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>;
    /** Use ID to return only children. Use 0 to return only top-level
     * 							items
     */
    parent?: Maybe<Scalars["String"]>;
    /** Specify objects whose parent is in an array */
    parentIn?: Maybe<Array<Maybe<Scalars["ID"]>>>;
    /** Specify posts whose parent is not in an array */
    parentNotIn?: Maybe<Array<Maybe<Scalars["ID"]>>>;
    /** Show posts with a specific password. */
    password?: Maybe<Scalars["String"]>;
    /** Show Posts based on a keyword search */
    search?: Maybe<Scalars["String"]>;
    stati?: Maybe<Array<Maybe<PostStatusEnum>>>;
    status?: Maybe<PostStatusEnum>;
    /** Tag Slug */
    tag?: Maybe<Scalars["String"]>;
    /** Use Tag ID */
    tagId?: Maybe<Scalars["String"]>;
    /** Array of tag IDs, used to display objects from one tag OR
     * 							another
     */
    tagIn?: Maybe<Array<Maybe<Scalars["ID"]>>>;
    /** Array of tag IDs, used to display objects from one tag OR
     * 							another
     */
    tagNotIn?: Maybe<Array<Maybe<Scalars["ID"]>>>;
    /** Array of tag slugs, used to display objects from one tag OR
     * 							another
     */
    tagSlugAnd?: Maybe<Array<Maybe<Scalars["String"]>>>;
    /** Array of tag slugs, used to exclude objects in specified
     * 							tags
     */
    tagSlugIn?: Maybe<Array<Maybe<Scalars["String"]>>>;
    taxQuery?: Maybe<TagToPostConnectionWhereArgsTaxQuery>;
    /** Title of the object */
    title?: Maybe<Scalars["String"]>;
};

export type TagToPostConnectionWhereArgsTaxArray = {
    taxonomy?: Maybe<TaxonomyEnum>;
    field?: Maybe<TagToPostConnectionWhereArgsTaxQueryField>;
    /** A list of term slugs */
    terms?: Maybe<Array<Maybe<Scalars["String"]>>>;
    /** Whether or not to include children for hierarchical
     * 											taxonomies. Defaults to false to improve performance (note that
     * 											this is opposite of the default for WP_Query).
     */
    includeChildren?: Maybe<Scalars["Boolean"]>;
    operator?: Maybe<TagToPostConnectionWhereArgsTaxQueryOperator>;
};

/** Query objects based on taxonomy parameters */
export type TagToPostConnectionWhereArgsTaxQuery = {
    relation?: Maybe<RelationEnum>;
    taxArray?: Maybe<Array<Maybe<TagToPostConnectionWhereArgsTaxArray>>>;
};

/** Which field to select taxonomy term by. Default value is "term_id" */
export enum TagToPostConnectionWhereArgsTaxQueryField {
    Id = "ID",
    Name = "NAME",
    Slug = "SLUG",
    Taxonomy_Id = "TAXONOMY_ID",
}

export enum TagToPostConnectionWhereArgsTaxQueryOperator {
    And = "AND",
    Exists = "EXISTS",
    In = "IN",
    Not_Exists = "NOT_EXISTS",
    Not_In = "NOT_IN",
}

/** A taxonomy object */
export type Taxonomy = Node & {
    /** A list of Post Types associated with the taxonomy */
    connectedPostTypeNames?: Maybe<Array<Maybe<Scalars["String"]>>>;
    /** List of Post Types connected to the Taxonomy */
    connectedPostTypes?: Maybe<Array<Maybe<PostType>>>;
    /** Description of the taxonomy. This field is equivalent to WP_Taxonomy-&gt;description */
    description?: Maybe<Scalars["String"]>;
    /** The plural name of the post type within the GraphQL Schema. */
    graphqlPluralName?: Maybe<Scalars["String"]>;
    /** The singular name of the post type within the GraphQL Schema. */
    graphqlSingleName?: Maybe<Scalars["String"]>;
    /** Whether the taxonomy is hierarchical */
    hierarchical?: Maybe<Scalars["Boolean"]>;
    id: Scalars["ID"];
    /** Name of the taxonomy shown in the menu. Usually plural. */
    label?: Maybe<Scalars["String"]>;
    /** The display name of the taxonomy. This field is equivalent to WP_Taxonomy-&gt;label */
    name?: Maybe<Scalars["String"]>;
    /** Whether the taxonomy is publicly queryable */
    public?: Maybe<Scalars["Boolean"]>;
    /** Name of content type to diplay in REST API &quot;wp/v2&quot; namespace. */
    restBase?: Maybe<Scalars["String"]>;
    /** The REST Controller class assigned to handling this content type. */
    restControllerClass?: Maybe<Scalars["String"]>;
    /** Whether to show the taxonomy as part of a tag cloud widget. This field is equivalent to WP_Taxonomy-&gt;show_tagcloud */
    showCloud?: Maybe<Scalars["Boolean"]>;
    /** Whether to display a column for the taxonomy on its post type listing screens. */
    showInAdminColumn?: Maybe<Scalars["Boolean"]>;
    /** Whether to add the post type to the GraphQL Schema. */
    showInGraphql?: Maybe<Scalars["Boolean"]>;
    /** Whether to show the taxonomy in the admin menu */
    showInMenu?: Maybe<Scalars["Boolean"]>;
    /** Whether the taxonomy is available for selection in navigation menus. */
    showInNavMenus?: Maybe<Scalars["Boolean"]>;
    /** Whether to show the taxonomy in the quick/bulk edit panel. */
    showInQuickEdit?: Maybe<Scalars["Boolean"]>;
    /** Whether to add the post type route in the REST API &quot;wp/v2&quot; namespace. */
    showInRest?: Maybe<Scalars["Boolean"]>;
    /** Whether to generate and allow a UI for managing terms in this taxonomy in the admin */
    showUi?: Maybe<Scalars["Boolean"]>;
};

/** A taxonomy object */
export type TaxonomyConnectedPostTypeNamesArgs = {
    types?: Maybe<Array<Maybe<PostTypeEnum>>>;
};

/** A taxonomy object */
export type TaxonomyConnectedPostTypesArgs = {
    types?: Maybe<Array<Maybe<PostTypeEnum>>>;
};

/** Allowed taxonomies */
export enum TaxonomyEnum {
    Category = "CATEGORY",
    Tag = "TAG",
}

/** Options for ordering the connection by */
export enum TermObjectsConnectionOrderbyEnum {
    Count = "COUNT",
    Description = "DESCRIPTION",
    Name = "NAME",
    Slug = "SLUG",
    Term_Group = "TERM_GROUP",
    Term_Id = "TERM_ID",
    Term_Order = "TERM_ORDER",
}

export type TermObjectUnion = Category | Tag;

/** A theme object */
export type Theme = Node & {
    /** Name of the theme author(s), could also be a company name. This field is
     * equivalent to WP_Theme-&gt;get( &quot;Author&quot; ).
     */
    author?: Maybe<Scalars["String"]>;
    /** URI for the author/company website. This field is equivalent to WP_Theme-&gt;get( &quot;AuthorURI&quot; ). */
    authorUri?: Maybe<Scalars["String"]>;
    /** The description of the theme. This field is equivalent to WP_Theme-&gt;get( &quot;Description&quot; ). */
    description?: Maybe<Scalars["String"]>;
    id: Scalars["ID"];
    /** Display name of the theme. This field is equivalent to WP_Theme-&gt;get( &quot;Name&quot; ). */
    name?: Maybe<Scalars["String"]>;
    /** The URL of the screenshot for the theme. The screenshot is intended to give an
     * overview of what the theme looks like. This field is equivalent to
     * WP_Theme-&gt;get_screenshot().
     */
    screenshot?: Maybe<Scalars["String"]>;
    /** The theme slug is used to internally match themes. Theme slugs can have
     * subdirectories like: my-theme/sub-theme. This field is equivalent to
     * WP_Theme-&gt;get_stylesheet().
     */
    slug?: Maybe<Scalars["String"]>;
    /** URI for the author/company website. This field is equivalent to WP_Theme-&gt;get( &quot;Tags&quot; ). */
    tags?: Maybe<Array<Maybe<Scalars["String"]>>>;
    /** A URI if the theme has a website associated with it. The Theme URI is handy
     * for directing users to a theme site for support etc. This field is equivalent
     * to WP_Theme-&gt;get( &quot;ThemeURI&quot; ).
     */
    themeUri?: Maybe<Scalars["String"]>;
    /** The current version of the theme. This field is equivalent to WP_Theme-&gt;get( &quot;Version&quot; ). */
    version?: Maybe<Scalars["Float"]>;
};

/** Input for the UpdateCategory mutation */
export type UpdateCategoryInput = {
    /** The slug that the category will be an alias of */
    aliasOf?: Maybe<Scalars["String"]>;
    clientMutationId: Scalars["String"];
    /** The description of the category object */
    description?: Maybe<Scalars["String"]>;
    /** The ID of the category object to update */
    id: Scalars["ID"];
    /** The name of the category object to mutate */
    name?: Maybe<Scalars["String"]>;
    /** The ID of the category that should be set as the parent */
    parentId?: Maybe<Scalars["ID"]>;
    /** If this argument exists then the slug will be checked to see if it is not an
     * existing valid term. If that check succeeds (it is not a valid term), then it
     * is added and the term id is given. If it fails, then a check is made to
     * whether the taxonomy is hierarchical and the parent argument is not empty. If
     * the second check succeeds, the term will be inserted and the term id will be
     * given. If the slug argument is empty, then it will be calculated from the term name.
     */
    slug?: Maybe<Scalars["String"]>;
};

/** The payload for the UpdateCategory mutation */
export type UpdateCategoryPayload = {
    /** The created category */
    category?: Maybe<Category>;
    clientMutationId: Scalars["String"];
};

/** Input for the updateComment mutation */
export type UpdateCommentInput = {
    /** User agent used to post the comment. */
    agent?: Maybe<Scalars["String"]>;
    /** The approval status of the comment. */
    approved?: Maybe<Scalars["String"]>;
    /** The name of the comment's author. */
    author?: Maybe<Scalars["String"]>;
    /** The email of the comment's author. */
    authorEmail?: Maybe<Scalars["String"]>;
    /** IP address for the comment's author. */
    authorIp?: Maybe<Scalars["String"]>;
    /** The url of the comment's author. */
    authorUrl?: Maybe<Scalars["String"]>;
    clientMutationId: Scalars["String"];
    /** Content of the comment. */
    content?: Maybe<Scalars["String"]>;
    /** The date of the object. Preferable to enter as year/month/day ( e.g.
     * 01/31/2017 ) as it will rearrange date as fit if it is not specified.
     * Incomplete dates may have unintended results for example, "2017" as the input
     * will use current date with timestamp 20:17
     */
    date?: Maybe<Scalars["String"]>;
    /** The ID of the comment being updated. */
    id: Scalars["ID"];
    /** Parent comment of current comment. */
    parent?: Maybe<Scalars["ID"]>;
    /** The ID of the post the comment belongs to. */
    postId?: Maybe<Scalars["Int"]>;
    /** Type of comment. */
    type?: Maybe<Scalars["String"]>;
    /** The userID of the comment's author. */
    userId?: Maybe<Scalars["Int"]>;
};

/** The payload for the updateComment mutation */
export type UpdateCommentPayload = {
    clientMutationId: Scalars["String"];
    /** The comment that was created */
    comment?: Maybe<Comment>;
};

/** Input for the updateDemo mutation */
export type UpdateDemoInput = {
    /** The userId to assign as the author of the post */
    authorId?: Maybe<Scalars["ID"]>;
    clientMutationId: Scalars["String"];
    /** The number of comments. Even though WPGraphQL denotes this field as an
     * integer, in WordPress this field should be saved as a numeric string for compatibility.
     */
    commentCount?: Maybe<Scalars["Int"]>;
    /** The comment status for the object */
    commentStatus?: Maybe<Scalars["String"]>;
    /** The content of the object */
    content?: Maybe<Scalars["String"]>;
    /** The date of the object. Preferable to enter as year/month/day (e.g.
     * 01/31/2017) as it will rearrange date as fit if it is not specified.
     * Incomplete dates may have unintended results for example, "2017" as the input
     * will use current date with timestamp 20:17
     */
    date?: Maybe<Scalars["String"]>;
    /** The excerpt of the object */
    excerpt?: Maybe<Scalars["String"]>;
    /** The ID of the demo object */
    id: Scalars["ID"];
    /** A field used for ordering posts. This is typically used with nav menu items or
     * for special ordering of hierarchical content types.
     */
    menuOrder?: Maybe<Scalars["Int"]>;
    /** If the post is an attachment or a media file, this field will carry the
     * corresponding MIME type. This field is equivalent to the value of
     * WP_Post->post_mime_type and the post_mime_type column in the "post_objects"
     * database table.
     */
    mimeType?: Maybe<MimeTypeEnum>;
    /** The ID of the parent object */
    parentId?: Maybe<Scalars["ID"]>;
    /** The password used to protect the content of the object */
    password?: Maybe<Scalars["String"]>;
    /** URLs that have been pinged. */
    pinged?: Maybe<Array<Maybe<Scalars["String"]>>>;
    /** The ping status for the object */
    pingStatus?: Maybe<Scalars["String"]>;
    /** The slug of the object */
    slug?: Maybe<Scalars["String"]>;
    /** The status of the object */
    status?: Maybe<PostStatusEnum>;
    /** The title of the post */
    title?: Maybe<Scalars["String"]>;
    /** URLs queued to be pinged. */
    toPing?: Maybe<Array<Maybe<Scalars["String"]>>>;
};

/** The payload for the updateDemo mutation */
export type UpdateDemoPayload = {
    clientMutationId: Scalars["String"];
    demo?: Maybe<Demo>;
};

/** Input for the updateMediaItem mutation */
export type UpdateMediaItemInput = {
    /** Alternative text to display when mediaItem is not displayed */
    altText?: Maybe<Scalars["String"]>;
    /** The userId to assign as the author of the mediaItem */
    authorId?: Maybe<Scalars["ID"]>;
    /** The caption for the mediaItem */
    caption?: Maybe<Scalars["String"]>;
    clientMutationId: Scalars["String"];
    /** The comment status for the mediaItem */
    commentStatus?: Maybe<Scalars["String"]>;
    /** The date of the mediaItem */
    date?: Maybe<Scalars["String"]>;
    /** The date (in GMT zone) of the mediaItem */
    dateGmt?: Maybe<Scalars["String"]>;
    /** Description of the mediaItem */
    description?: Maybe<Scalars["String"]>;
    /** The file name of the mediaItem */
    filePath?: Maybe<Scalars["String"]>;
    /** The file type of the mediaItem */
    fileType?: Maybe<MimeTypeEnum>;
    /** The ID of the mediaItem object */
    id: Scalars["ID"];
    /** The WordPress post ID or the graphQL postId of the parent object */
    parentId?: Maybe<Scalars["ID"]>;
    /** The ping status for the mediaItem */
    pingStatus?: Maybe<Scalars["String"]>;
    /** The slug of the mediaItem */
    slug?: Maybe<Scalars["String"]>;
    /** The status of the mediaItem */
    status?: Maybe<MediaItemStatusEnum>;
    /** The title of the mediaItem */
    title?: Maybe<Scalars["String"]>;
};

/** The payload for the updateMediaItem mutation */
export type UpdateMediaItemPayload = {
    clientMutationId: Scalars["String"];
    mediaItem?: Maybe<MediaItem>;
};

/** Input for the updatePage mutation */
export type UpdatePageInput = {
    /** The userId to assign as the author of the post */
    authorId?: Maybe<Scalars["ID"]>;
    clientMutationId: Scalars["String"];
    /** The number of comments. Even though WPGraphQL denotes this field as an
     * integer, in WordPress this field should be saved as a numeric string for compatibility.
     */
    commentCount?: Maybe<Scalars["Int"]>;
    /** The comment status for the object */
    commentStatus?: Maybe<Scalars["String"]>;
    /** The content of the object */
    content?: Maybe<Scalars["String"]>;
    /** The date of the object. Preferable to enter as year/month/day (e.g.
     * 01/31/2017) as it will rearrange date as fit if it is not specified.
     * Incomplete dates may have unintended results for example, "2017" as the input
     * will use current date with timestamp 20:17
     */
    date?: Maybe<Scalars["String"]>;
    /** The excerpt of the object */
    excerpt?: Maybe<Scalars["String"]>;
    /** The ID of the page object */
    id: Scalars["ID"];
    /** A field used for ordering posts. This is typically used with nav menu items or
     * for special ordering of hierarchical content types.
     */
    menuOrder?: Maybe<Scalars["Int"]>;
    /** If the post is an attachment or a media file, this field will carry the
     * corresponding MIME type. This field is equivalent to the value of
     * WP_Post->post_mime_type and the post_mime_type column in the "post_objects"
     * database table.
     */
    mimeType?: Maybe<MimeTypeEnum>;
    /** The ID of the parent object */
    parentId?: Maybe<Scalars["ID"]>;
    /** The password used to protect the content of the object */
    password?: Maybe<Scalars["String"]>;
    /** URLs that have been pinged. */
    pinged?: Maybe<Array<Maybe<Scalars["String"]>>>;
    /** The ping status for the object */
    pingStatus?: Maybe<Scalars["String"]>;
    /** The slug of the object */
    slug?: Maybe<Scalars["String"]>;
    /** The status of the object */
    status?: Maybe<PostStatusEnum>;
    /** The title of the post */
    title?: Maybe<Scalars["String"]>;
    /** URLs queued to be pinged. */
    toPing?: Maybe<Array<Maybe<Scalars["String"]>>>;
};

/** The payload for the updatePage mutation */
export type UpdatePagePayload = {
    clientMutationId: Scalars["String"];
    page?: Maybe<Page>;
};

/** Input for the updatePost mutation */
export type UpdatePostInput = {
    /** The userId to assign as the author of the post */
    authorId?: Maybe<Scalars["ID"]>;
    /** Set connections between the post and categories */
    categories?: Maybe<PostCategoriesInput>;
    clientMutationId: Scalars["String"];
    /** The number of comments. Even though WPGraphQL denotes this field as an
     * integer, in WordPress this field should be saved as a numeric string for compatibility.
     */
    commentCount?: Maybe<Scalars["Int"]>;
    /** The comment status for the object */
    commentStatus?: Maybe<Scalars["String"]>;
    /** The content of the object */
    content?: Maybe<Scalars["String"]>;
    /** The date of the object. Preferable to enter as year/month/day (e.g.
     * 01/31/2017) as it will rearrange date as fit if it is not specified.
     * Incomplete dates may have unintended results for example, "2017" as the input
     * will use current date with timestamp 20:17
     */
    date?: Maybe<Scalars["String"]>;
    /** The excerpt of the object */
    excerpt?: Maybe<Scalars["String"]>;
    /** The ID of the post object */
    id: Scalars["ID"];
    /** A field used for ordering posts. This is typically used with nav menu items or
     * for special ordering of hierarchical content types.
     */
    menuOrder?: Maybe<Scalars["Int"]>;
    /** If the post is an attachment or a media file, this field will carry the
     * corresponding MIME type. This field is equivalent to the value of
     * WP_Post->post_mime_type and the post_mime_type column in the "post_objects"
     * database table.
     */
    mimeType?: Maybe<MimeTypeEnum>;
    /** The ID of the parent object */
    parentId?: Maybe<Scalars["ID"]>;
    /** The password used to protect the content of the object */
    password?: Maybe<Scalars["String"]>;
    /** URLs that have been pinged. */
    pinged?: Maybe<Array<Maybe<Scalars["String"]>>>;
    /** The ping status for the object */
    pingStatus?: Maybe<Scalars["String"]>;
    /** The slug of the object */
    slug?: Maybe<Scalars["String"]>;
    /** The status of the object */
    status?: Maybe<PostStatusEnum>;
    /** Set connections between the post and tags */
    tags?: Maybe<PostTagsInput>;
    /** The title of the post */
    title?: Maybe<Scalars["String"]>;
    /** URLs queued to be pinged. */
    toPing?: Maybe<Array<Maybe<Scalars["String"]>>>;
};

/** The payload for the updatePost mutation */
export type UpdatePostPayload = {
    clientMutationId: Scalars["String"];
    post?: Maybe<Post>;
};

/** Input for the updateSettings mutation */
export type UpdateSettingsInput = {
    clientMutationId: Scalars["String"];
    /** Allow people to post comments on new articles. */
    discussionSettingsDefaultCommentStatus?: Maybe<Scalars["String"]>;
    /** Allow link notifications from other blogs (pingbacks and trackbacks) on new articles. */
    discussionSettingsDefaultPingStatus?: Maybe<Scalars["String"]>;
    /** A date format for all date strings. */
    generalSettingsDateFormat?: Maybe<Scalars["String"]>;
    /** Site tagline. */
    generalSettingsDescription?: Maybe<Scalars["String"]>;
    /** This address is used for admin purposes, like new user notification. */
    generalSettingsEmail?: Maybe<Scalars["String"]>;
    /** WordPress locale code. */
    generalSettingsLanguage?: Maybe<Scalars["String"]>;
    /** A day number of the week that the week should start on. */
    generalSettingsStartOfWeek?: Maybe<Scalars["Int"]>;
    /** A time format for all time strings. */
    generalSettingsTimeFormat?: Maybe<Scalars["String"]>;
    /** A city in the same timezone as you. */
    generalSettingsTimezone?: Maybe<Scalars["String"]>;
    /** Site title. */
    generalSettingsTitle?: Maybe<Scalars["String"]>;
    /** Site URL. */
    generalSettingsUrl?: Maybe<Scalars["String"]>;
    /** Blog pages show at most. */
    readingSettingsPostsPerPage?: Maybe<Scalars["Int"]>;
    /** Default post category. */
    writingSettingsDefaultCategory?: Maybe<Scalars["Int"]>;
    /** Default post format. */
    writingSettingsDefaultPostFormat?: Maybe<Scalars["String"]>;
    /** Convert emoticons like :-) and :-P to graphics on display. */
    writingSettingsUseSmilies?: Maybe<Scalars["Boolean"]>;
};

/** The payload for the updateSettings mutation */
export type UpdateSettingsPayload = {
    allSettings?: Maybe<Settings>;
    clientMutationId: Scalars["String"];
    discussionSettings?: Maybe<DiscussionSettings>;
    generalSettings?: Maybe<GeneralSettings>;
    readingSettings?: Maybe<ReadingSettings>;
    writingSettings?: Maybe<WritingSettings>;
};

/** Input for the UpdateTag mutation */
export type UpdateTagInput = {
    /** The slug that the post_tag will be an alias of */
    aliasOf?: Maybe<Scalars["String"]>;
    clientMutationId: Scalars["String"];
    /** The description of the post_tag object */
    description?: Maybe<Scalars["String"]>;
    /** The ID of the tag object to update */
    id: Scalars["ID"];
    /** The name of the post_tag object to mutate */
    name?: Maybe<Scalars["String"]>;
    /** If this argument exists then the slug will be checked to see if it is not an
     * existing valid term. If that check succeeds (it is not a valid term), then it
     * is added and the term id is given. If it fails, then a check is made to
     * whether the taxonomy is hierarchical and the parent argument is not empty. If
     * the second check succeeds, the term will be inserted and the term id will be
     * given. If the slug argument is empty, then it will be calculated from the term name.
     */
    slug?: Maybe<Scalars["String"]>;
};

/** The payload for the UpdateTag mutation */
export type UpdateTagPayload = {
    clientMutationId: Scalars["String"];
    /** The created post_tag */
    tag?: Maybe<Tag>;
};

/** Input for the updateUser mutation */
export type UpdateUserInput = {
    /** User's AOL IM account. */
    aim?: Maybe<Scalars["String"]>;
    clientMutationId: Scalars["String"];
    /** A string containing content about the user. */
    description?: Maybe<Scalars["String"]>;
    /** A string that will be shown on the site. Defaults to user's username. It is
     * likely that you will want to change this, for both appearance and security
     * through obscurity (that is if you dont use and delete the default admin user).
     */
    displayName?: Maybe<Scalars["String"]>;
    /** A string containing the user's email address. */
    email?: Maybe<Scalars["String"]>;
    /** 	The user's first name. */
    firstName?: Maybe<Scalars["String"]>;
    /** The ID of the user */
    id: Scalars["ID"];
    /** User's Jabber account. */
    jabber?: Maybe<Scalars["String"]>;
    /** The user's last name. */
    lastName?: Maybe<Scalars["String"]>;
    /** User's locale. */
    locale?: Maybe<Scalars["String"]>;
    /** A string that contains a URL-friendly name for the user. The default is the user's username. */
    nicename?: Maybe<Scalars["String"]>;
    /** The user's nickname, defaults to the user's username. */
    nickname?: Maybe<Scalars["String"]>;
    /** A string that contains the plain text password for the user. */
    password?: Maybe<Scalars["String"]>;
    /** The date the user registered. Format is Y-m-d H:i:s. */
    registered?: Maybe<Scalars["String"]>;
    /** A string for whether to enable the rich editor or not. False if not empty. */
    richEditing?: Maybe<Scalars["String"]>;
    /** An array of roles to be assigned to the user. */
    roles?: Maybe<Array<Maybe<Scalars["String"]>>>;
    /** A string containing the user's URL for the user's web site. */
    websiteUrl?: Maybe<Scalars["String"]>;
    /** User's Yahoo IM account. */
    yim?: Maybe<Scalars["String"]>;
};

/** The payload for the updateUser mutation */
export type UpdateUserPayload = {
    clientMutationId: Scalars["String"];
    user?: Maybe<User>;
};

/** A User object */
export type User = Node & {
    /** Avatar object for user. The avatar object can be retrieved in different sizes by specifying the size argument. */
    avatar?: Maybe<Avatar>;
    /** This field is the id of the user. The id of the user matches WP_User-&gt;ID
     * field and the value in the ID column for the &quot;users&quot; table in SQL.
     */
    capabilities?: Maybe<Array<Maybe<Scalars["String"]>>>;
    /** User metadata option name. Usually it will be &quot;wp_capabilities&quot;. */
    capKey?: Maybe<Scalars["String"]>;
    /** Connection between the User type and the User type */
    comments?: Maybe<UserToCommentConnection>;
    /** Connection between the User type and the User type */
    demos?: Maybe<UserToDemoConnection>;
    /** Description of the user. */
    description?: Maybe<Scalars["String"]>;
    /** Email of the user. This is equivalent to the WP_User-&gt;user_email property. */
    email?: Maybe<Scalars["String"]>;
    /** A complete list of capabilities including capabilities inherited from a role.
     * This is equivalent to the array keys of WP_User-&gt;allcaps.
     */
    extraCapabilities?: Maybe<Array<Maybe<Scalars["String"]>>>;
    /** First name of the user. This is equivalent to the WP_User-&gt;user_first_name property. */
    firstName?: Maybe<Scalars["String"]>;
    /** The globally unique identifier for the user */
    id: Scalars["ID"];
    /** Last name of the user. This is equivalent to the WP_User-&gt;user_last_name property. */
    lastName?: Maybe<Scalars["String"]>;
    /** The preferred language locale set for the user. Value derived from get_user_locale(). */
    locale?: Maybe<Scalars["String"]>;
    /** Connection between the User type and the User type */
    mediaItems?: Maybe<UserToMediaItemConnection>;
    /** Display name of the user. This is equivalent to the WP_User-&gt;dispaly_name property. */
    name?: Maybe<Scalars["String"]>;
    /** The nicename for the user. This field is equivalent to WP_User-&gt;user_nicename */
    nicename?: Maybe<Scalars["String"]>;
    /** Nickname of the user. */
    nickname?: Maybe<Scalars["String"]>;
    /** Connection between the User type and the User type */
    pages?: Maybe<UserToPageConnection>;
    /** Connection between the User type and the User type */
    posts?: Maybe<UserToPostConnection>;
    /** The date the user registered or was created. The field follows a full ISO8601 date string format. */
    registeredDate?: Maybe<Scalars["String"]>;
    /** Connection between the User type and the User type */
    revisions?: Maybe<UserToRevisionConnection>;
    /** A list of roles that the user has. Roles can be used for querying for certain
     * types of users, but should not be used in permissions checks.
     */
    roles?: Maybe<Array<Maybe<Scalars["String"]>>>;
    /** The slug for the user. This field is equivalent to WP_User-&gt;user_nicename */
    slug?: Maybe<Scalars["String"]>;
    /** A website url that is associated with the user. */
    url?: Maybe<Scalars["String"]>;
    /** The Id of the user. Equivelant to WP_User-&gt;ID */
    userId?: Maybe<Scalars["Int"]>;
    /** Username for the user. This field is equivalent to WP_User-&gt;user_login. */
    username?: Maybe<Scalars["String"]>;
};

/** A User object */
export type UserAvatarArgs = {
    size: Scalars["Int"];
    forceDefault?: Maybe<Scalars["Boolean"]>;
    rating?: Maybe<AvatarRatingEnum>;
};

/** A User object */
export type UserCommentsArgs = {
    first?: Maybe<Scalars["Int"]>;
    last?: Maybe<Scalars["Int"]>;
    after?: Maybe<Scalars["String"]>;
    before?: Maybe<Scalars["String"]>;
    where?: Maybe<UserToCommentConnectionWhereArgs>;
};

/** A User object */
export type UserDemosArgs = {
    first?: Maybe<Scalars["Int"]>;
    last?: Maybe<Scalars["Int"]>;
    after?: Maybe<Scalars["String"]>;
    before?: Maybe<Scalars["String"]>;
    where?: Maybe<UserToDemoConnectionWhereArgs>;
};

/** A User object */
export type UserMediaItemsArgs = {
    first?: Maybe<Scalars["Int"]>;
    last?: Maybe<Scalars["Int"]>;
    after?: Maybe<Scalars["String"]>;
    before?: Maybe<Scalars["String"]>;
    where?: Maybe<UserToMediaItemConnectionWhereArgs>;
};

/** A User object */
export type UserPagesArgs = {
    first?: Maybe<Scalars["Int"]>;
    last?: Maybe<Scalars["Int"]>;
    after?: Maybe<Scalars["String"]>;
    before?: Maybe<Scalars["String"]>;
    where?: Maybe<UserToPageConnectionWhereArgs>;
};

/** A User object */
export type UserPostsArgs = {
    first?: Maybe<Scalars["Int"]>;
    last?: Maybe<Scalars["Int"]>;
    after?: Maybe<Scalars["String"]>;
    before?: Maybe<Scalars["String"]>;
    where?: Maybe<UserToPostConnectionWhereArgs>;
};

/** A User object */
export type UserRevisionsArgs = {
    first?: Maybe<Scalars["Int"]>;
    last?: Maybe<Scalars["Int"]>;
    after?: Maybe<Scalars["String"]>;
    before?: Maybe<Scalars["String"]>;
    where?: Maybe<UserToRevisionConnectionWhereArgs>;
};

/** A user role object */
export type UserRole = {
    /** The capabilities that belong to this role */
    capabilities?: Maybe<Array<Maybe<Scalars["String"]>>>;
    /** The globally unique identifier for the role */
    id: Scalars["ID"];
    /** The UI friendly name of the role */
    name?: Maybe<Scalars["String"]>;
};

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

/** Connection between the User type and the User type */
export type UserToCommentConnection = {
    /** Edges for the UserToCommentConnection connection */
    edges?: Maybe<Array<Maybe<UserToCommentConnectionEdge>>>;
    /** The nodes of the connection, without the edges */
    nodes?: Maybe<Array<Maybe<Comment>>>;
    /** Information about pagination in a connection. */
    pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type UserToCommentConnectionEdge = {
    /** A cursor for use in pagination */
    cursor?: Maybe<Scalars["String"]>;
    /** The item at the end of the edge */
    node?: Maybe<Comment>;
};

/** Arguments for filtering the UserToCommentConnection connection */
export type UserToCommentConnectionWhereArgs = {
    /** Comment author email address. */
    authorEmail?: Maybe<Scalars["String"]>;
    /** Array of author IDs to include comments for. */
    authorIn?: Maybe<Array<Maybe<Scalars["ID"]>>>;
    /** Array of author IDs to exclude comments for. */
    authorNotIn?: Maybe<Array<Maybe<Scalars["ID"]>>>;
    /** Comment author URL. */
    authorUrl?: Maybe<Scalars["String"]>;
    /** Array of comment IDs to include. */
    commentIn?: Maybe<Array<Maybe<Scalars["ID"]>>>;
    /** Array of IDs of users whose unapproved comments will be returned by the
     * 							query regardless of status.
     */
    commentNotIn?: Maybe<Array<Maybe<Scalars["ID"]>>>;
    /** Include comments of a given type. */
    commentType?: Maybe<Scalars["String"]>;
    /** Include comments from a given array of comment types. */
    commentTypeIn?: Maybe<Array<Maybe<Scalars["String"]>>>;
    /** Exclude comments from a given array of comment types. */
    commentTypeNotIn?: Maybe<Scalars["String"]>;
    /** Content object author ID to limit results by. */
    contentAuthor?: Maybe<Array<Maybe<Scalars["ID"]>>>;
    /** Array of author IDs to retrieve comments for. */
    contentAuthorIn?: Maybe<Array<Maybe<Scalars["ID"]>>>;
    /** Array of author IDs *not* to retrieve comments for. */
    contentAuthorNotIn?: Maybe<Array<Maybe<Scalars["ID"]>>>;
    /** Limit results to those affiliated with a given content object
     * 							ID.
     */
    contentId?: Maybe<Scalars["ID"]>;
    /** Array of content object IDs to include affiliated comments
     * 							for.
     */
    contentIdIn?: Maybe<Array<Maybe<Scalars["ID"]>>>;
    /** Array of content object IDs to exclude affiliated comments
     * 							for.
     */
    contentIdNotIn?: Maybe<Array<Maybe<Scalars["ID"]>>>;
    /** Content object name to retrieve affiliated comments for. */
    contentName?: Maybe<Scalars["String"]>;
    /** Content Object parent ID to retrieve affiliated comments for. */
    contentParent?: Maybe<Scalars["Int"]>;
    /** Array of content object statuses to retrieve affiliated comments for.
     * 							Pass 'any' to match any value.
     */
    contentStatus?: Maybe<Array<Maybe<PostStatusEnum>>>;
    /** Content object type or array of types to retrieve affiliated comments for. Pass 'any' to match any value. */
    contentType?: Maybe<Array<Maybe<PostStatusEnum>>>;
    /** Array of author IDs to include comments for. */
    includeUnapproved?: Maybe<Array<Maybe<Scalars["ID"]>>>;
    /** Karma score to retrieve matching comments for. */
    karma?: Maybe<Scalars["Int"]>;
    /** The cardinality of the order of the connection */
    order?: Maybe<OrderEnum>;
    /** Field to order the comments by. */
    orderby?: Maybe<CommentsConnectionOrderbyEnum>;
    /** Parent ID of comment to retrieve children of. */
    parent?: Maybe<Scalars["Int"]>;
    /** Array of parent IDs of comments to retrieve children for. */
    parentIn?: Maybe<Array<Maybe<Scalars["ID"]>>>;
    /** Array of parent IDs of comments *not* to retrieve children
     * 							for.
     */
    parentNotIn?: Maybe<Array<Maybe<Scalars["ID"]>>>;
    /** Search term(s) to retrieve matching comments for. */
    search?: Maybe<Scalars["String"]>;
    /** Comment status to limit results by. */
    status?: Maybe<Scalars["String"]>;
    /** Include comments for a specific user ID. */
    userId?: Maybe<Scalars["ID"]>;
};

/** Connection between the User type and the User type */
export type UserToDemoConnection = {
    /** Edges for the UserToDemoConnection connection */
    edges?: Maybe<Array<Maybe<UserToDemoConnectionEdge>>>;
    /** The nodes of the connection, without the edges */
    nodes?: Maybe<Array<Maybe<Demo>>>;
    /** Information about pagination in a connection. */
    pageInfo?: Maybe<WpPageInfo>;
    /** Information about the type of content being queried */
    postTypeInfo?: Maybe<PostType>;
};

/** An edge in a connection */
export type UserToDemoConnectionEdge = {
    /** A cursor for use in pagination */
    cursor?: Maybe<Scalars["String"]>;
    /** The item at the end of the edge */
    node?: Maybe<Demo>;
};

/** Arguments for filtering the UserToDemoConnection connection */
export type UserToDemoConnectionWhereArgs = {
    /** The user that's connected as the author of the object. Use the
     * 							userId for the author object.
     */
    author?: Maybe<Scalars["Int"]>;
    /** Find objects connected to author(s) in the array of author's userIds */
    authorIn?: Maybe<Array<Maybe<Scalars["ID"]>>>;
    /** Find objects connected to the author by the author's nicename */
    authorName?: Maybe<Scalars["String"]>;
    /** Find objects NOT connected to author(s) in the array of author's
     * 							userIds
     */
    authorNotIn?: Maybe<Array<Maybe<Scalars["ID"]>>>;
    /** Category ID */
    categoryId?: Maybe<Scalars["Int"]>;
    /** Array of category IDs, used to display objects from one
     * 										category OR another
     */
    categoryIn?: Maybe<Array<Maybe<Scalars["ID"]>>>;
    /** Use Category Slug */
    categoryName?: Maybe<Scalars["String"]>;
    /** Array of category IDs, used to display objects from one
     * 										category OR another
     */
    categoryNotIn?: Maybe<Array<Maybe<Scalars["ID"]>>>;
    /** Filter the connection based on dates */
    dateQuery?: Maybe<DateQueryInput>;
    /** True for objects with passwords; False for objects without passwords;
     * 							null for all objects with or without passwords
     */
    hasPassword?: Maybe<Scalars["Boolean"]>;
    /** Specific ID of the object */
    id?: Maybe<Scalars["Int"]>;
    /** Array of IDs for the objects to retrieve */
    in?: Maybe<Array<Maybe<Scalars["ID"]>>>;
    /** Get objects with a specific mimeType property */
    mimeType?: Maybe<MimeTypeEnum>;
    /** Slug / post_name of the object */
    name?: Maybe<Scalars["String"]>;
    /** Specify objects to retrieve. Use slugs */
    nameIn?: Maybe<Array<Maybe<Scalars["String"]>>>;
    /** Specify IDs NOT to retrieve. If this is used in the same query as "in",
     * 							it will be ignored
     */
    notIn?: Maybe<Array<Maybe<Scalars["ID"]>>>;
    /** What paramater to use to order the objects by. */
    orderby?: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>;
    /** Use ID to return only children. Use 0 to return only top-level
     * 							items
     */
    parent?: Maybe<Scalars["String"]>;
    /** Specify objects whose parent is in an array */
    parentIn?: Maybe<Array<Maybe<Scalars["ID"]>>>;
    /** Specify posts whose parent is not in an array */
    parentNotIn?: Maybe<Array<Maybe<Scalars["ID"]>>>;
    /** Show posts with a specific password. */
    password?: Maybe<Scalars["String"]>;
    /** Show Posts based on a keyword search */
    search?: Maybe<Scalars["String"]>;
    stati?: Maybe<Array<Maybe<PostStatusEnum>>>;
    status?: Maybe<PostStatusEnum>;
    /** Tag Slug */
    tag?: Maybe<Scalars["String"]>;
    /** Use Tag ID */
    tagId?: Maybe<Scalars["String"]>;
    /** Array of tag IDs, used to display objects from one tag OR
     * 							another
     */
    tagIn?: Maybe<Array<Maybe<Scalars["ID"]>>>;
    /** Array of tag IDs, used to display objects from one tag OR
     * 							another
     */
    tagNotIn?: Maybe<Array<Maybe<Scalars["ID"]>>>;
    /** Array of tag slugs, used to display objects from one tag OR
     * 							another
     */
    tagSlugAnd?: Maybe<Array<Maybe<Scalars["String"]>>>;
    /** Array of tag slugs, used to exclude objects in specified
     * 							tags
     */
    tagSlugIn?: Maybe<Array<Maybe<Scalars["String"]>>>;
    taxQuery?: Maybe<UserToDemoConnectionWhereArgsTaxQuery>;
    /** Title of the object */
    title?: Maybe<Scalars["String"]>;
};

export type UserToDemoConnectionWhereArgsTaxArray = {
    taxonomy?: Maybe<TaxonomyEnum>;
    field?: Maybe<UserToDemoConnectionWhereArgsTaxQueryField>;
    /** A list of term slugs */
    terms?: Maybe<Array<Maybe<Scalars["String"]>>>;
    /** Whether or not to include children for hierarchical
     * 											taxonomies. Defaults to false to improve performance (note that
     * 											this is opposite of the default for WP_Query).
     */
    includeChildren?: Maybe<Scalars["Boolean"]>;
    operator?: Maybe<UserToDemoConnectionWhereArgsTaxQueryOperator>;
};

/** Query objects based on taxonomy parameters */
export type UserToDemoConnectionWhereArgsTaxQuery = {
    relation?: Maybe<RelationEnum>;
    taxArray?: Maybe<Array<Maybe<UserToDemoConnectionWhereArgsTaxArray>>>;
};

/** Which field to select taxonomy term by. Default value is "term_id" */
export enum UserToDemoConnectionWhereArgsTaxQueryField {
    Id = "ID",
    Name = "NAME",
    Slug = "SLUG",
    Taxonomy_Id = "TAXONOMY_ID",
}

export enum UserToDemoConnectionWhereArgsTaxQueryOperator {
    And = "AND",
    Exists = "EXISTS",
    In = "IN",
    Not_Exists = "NOT_EXISTS",
    Not_In = "NOT_IN",
}

/** Connection between the User type and the User type */
export type UserToMediaItemConnection = {
    /** Edges for the UserToMediaItemConnection connection */
    edges?: Maybe<Array<Maybe<UserToMediaItemConnectionEdge>>>;
    /** The nodes of the connection, without the edges */
    nodes?: Maybe<Array<Maybe<MediaItem>>>;
    /** Information about pagination in a connection. */
    pageInfo?: Maybe<WpPageInfo>;
    /** Information about the type of content being queried */
    postTypeInfo?: Maybe<PostType>;
};

/** An edge in a connection */
export type UserToMediaItemConnectionEdge = {
    /** A cursor for use in pagination */
    cursor?: Maybe<Scalars["String"]>;
    /** The item at the end of the edge */
    node?: Maybe<MediaItem>;
};

/** Arguments for filtering the UserToMediaItemConnection connection */
export type UserToMediaItemConnectionWhereArgs = {
    /** The user that's connected as the author of the object. Use the
     * 							userId for the author object.
     */
    author?: Maybe<Scalars["Int"]>;
    /** Find objects connected to author(s) in the array of author's userIds */
    authorIn?: Maybe<Array<Maybe<Scalars["ID"]>>>;
    /** Find objects connected to the author by the author's nicename */
    authorName?: Maybe<Scalars["String"]>;
    /** Find objects NOT connected to author(s) in the array of author's
     * 							userIds
     */
    authorNotIn?: Maybe<Array<Maybe<Scalars["ID"]>>>;
    /** Category ID */
    categoryId?: Maybe<Scalars["Int"]>;
    /** Array of category IDs, used to display objects from one
     * 										category OR another
     */
    categoryIn?: Maybe<Array<Maybe<Scalars["ID"]>>>;
    /** Use Category Slug */
    categoryName?: Maybe<Scalars["String"]>;
    /** Array of category IDs, used to display objects from one
     * 										category OR another
     */
    categoryNotIn?: Maybe<Array<Maybe<Scalars["ID"]>>>;
    /** Filter the connection based on dates */
    dateQuery?: Maybe<DateQueryInput>;
    /** True for objects with passwords; False for objects without passwords;
     * 							null for all objects with or without passwords
     */
    hasPassword?: Maybe<Scalars["Boolean"]>;
    /** Specific ID of the object */
    id?: Maybe<Scalars["Int"]>;
    /** Array of IDs for the objects to retrieve */
    in?: Maybe<Array<Maybe<Scalars["ID"]>>>;
    /** Get objects with a specific mimeType property */
    mimeType?: Maybe<MimeTypeEnum>;
    /** Slug / post_name of the object */
    name?: Maybe<Scalars["String"]>;
    /** Specify objects to retrieve. Use slugs */
    nameIn?: Maybe<Array<Maybe<Scalars["String"]>>>;
    /** Specify IDs NOT to retrieve. If this is used in the same query as "in",
     * 							it will be ignored
     */
    notIn?: Maybe<Array<Maybe<Scalars["ID"]>>>;
    /** What paramater to use to order the objects by. */
    orderby?: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>;
    /** Use ID to return only children. Use 0 to return only top-level
     * 							items
     */
    parent?: Maybe<Scalars["String"]>;
    /** Specify objects whose parent is in an array */
    parentIn?: Maybe<Array<Maybe<Scalars["ID"]>>>;
    /** Specify posts whose parent is not in an array */
    parentNotIn?: Maybe<Array<Maybe<Scalars["ID"]>>>;
    /** Show posts with a specific password. */
    password?: Maybe<Scalars["String"]>;
    /** Show Posts based on a keyword search */
    search?: Maybe<Scalars["String"]>;
    stati?: Maybe<Array<Maybe<PostStatusEnum>>>;
    status?: Maybe<PostStatusEnum>;
    /** Tag Slug */
    tag?: Maybe<Scalars["String"]>;
    /** Use Tag ID */
    tagId?: Maybe<Scalars["String"]>;
    /** Array of tag IDs, used to display objects from one tag OR
     * 							another
     */
    tagIn?: Maybe<Array<Maybe<Scalars["ID"]>>>;
    /** Array of tag IDs, used to display objects from one tag OR
     * 							another
     */
    tagNotIn?: Maybe<Array<Maybe<Scalars["ID"]>>>;
    /** Array of tag slugs, used to display objects from one tag OR
     * 							another
     */
    tagSlugAnd?: Maybe<Array<Maybe<Scalars["String"]>>>;
    /** Array of tag slugs, used to exclude objects in specified
     * 							tags
     */
    tagSlugIn?: Maybe<Array<Maybe<Scalars["String"]>>>;
    taxQuery?: Maybe<UserToMediaItemConnectionWhereArgsTaxQuery>;
    /** Title of the object */
    title?: Maybe<Scalars["String"]>;
};

export type UserToMediaItemConnectionWhereArgsTaxArray = {
    taxonomy?: Maybe<TaxonomyEnum>;
    field?: Maybe<UserToMediaItemConnectionWhereArgsTaxQueryField>;
    /** A list of term slugs */
    terms?: Maybe<Array<Maybe<Scalars["String"]>>>;
    /** Whether or not to include children for hierarchical
     * 											taxonomies. Defaults to false to improve performance (note that
     * 											this is opposite of the default for WP_Query).
     */
    includeChildren?: Maybe<Scalars["Boolean"]>;
    operator?: Maybe<UserToMediaItemConnectionWhereArgsTaxQueryOperator>;
};

/** Query objects based on taxonomy parameters */
export type UserToMediaItemConnectionWhereArgsTaxQuery = {
    relation?: Maybe<RelationEnum>;
    taxArray?: Maybe<Array<Maybe<UserToMediaItemConnectionWhereArgsTaxArray>>>;
};

/** Which field to select taxonomy term by. Default value is "term_id" */
export enum UserToMediaItemConnectionWhereArgsTaxQueryField {
    Id = "ID",
    Name = "NAME",
    Slug = "SLUG",
    Taxonomy_Id = "TAXONOMY_ID",
}

export enum UserToMediaItemConnectionWhereArgsTaxQueryOperator {
    And = "AND",
    Exists = "EXISTS",
    In = "IN",
    Not_Exists = "NOT_EXISTS",
    Not_In = "NOT_IN",
}

/** Connection between the User type and the User type */
export type UserToPageConnection = {
    /** Edges for the UserToPageConnection connection */
    edges?: Maybe<Array<Maybe<UserToPageConnectionEdge>>>;
    /** The nodes of the connection, without the edges */
    nodes?: Maybe<Array<Maybe<Page>>>;
    /** Information about pagination in a connection. */
    pageInfo?: Maybe<WpPageInfo>;
    /** Information about the type of content being queried */
    postTypeInfo?: Maybe<PostType>;
};

/** An edge in a connection */
export type UserToPageConnectionEdge = {
    /** A cursor for use in pagination */
    cursor?: Maybe<Scalars["String"]>;
    /** The item at the end of the edge */
    node?: Maybe<Page>;
};

/** Arguments for filtering the UserToPageConnection connection */
export type UserToPageConnectionWhereArgs = {
    /** The user that's connected as the author of the object. Use the
     * 							userId for the author object.
     */
    author?: Maybe<Scalars["Int"]>;
    /** Find objects connected to author(s) in the array of author's userIds */
    authorIn?: Maybe<Array<Maybe<Scalars["ID"]>>>;
    /** Find objects connected to the author by the author's nicename */
    authorName?: Maybe<Scalars["String"]>;
    /** Find objects NOT connected to author(s) in the array of author's
     * 							userIds
     */
    authorNotIn?: Maybe<Array<Maybe<Scalars["ID"]>>>;
    /** Category ID */
    categoryId?: Maybe<Scalars["Int"]>;
    /** Array of category IDs, used to display objects from one
     * 										category OR another
     */
    categoryIn?: Maybe<Array<Maybe<Scalars["ID"]>>>;
    /** Use Category Slug */
    categoryName?: Maybe<Scalars["String"]>;
    /** Array of category IDs, used to display objects from one
     * 										category OR another
     */
    categoryNotIn?: Maybe<Array<Maybe<Scalars["ID"]>>>;
    /** Filter the connection based on dates */
    dateQuery?: Maybe<DateQueryInput>;
    /** True for objects with passwords; False for objects without passwords;
     * 							null for all objects with or without passwords
     */
    hasPassword?: Maybe<Scalars["Boolean"]>;
    /** Specific ID of the object */
    id?: Maybe<Scalars["Int"]>;
    /** Array of IDs for the objects to retrieve */
    in?: Maybe<Array<Maybe<Scalars["ID"]>>>;
    /** Get objects with a specific mimeType property */
    mimeType?: Maybe<MimeTypeEnum>;
    /** Slug / post_name of the object */
    name?: Maybe<Scalars["String"]>;
    /** Specify objects to retrieve. Use slugs */
    nameIn?: Maybe<Array<Maybe<Scalars["String"]>>>;
    /** Specify IDs NOT to retrieve. If this is used in the same query as "in",
     * 							it will be ignored
     */
    notIn?: Maybe<Array<Maybe<Scalars["ID"]>>>;
    /** What paramater to use to order the objects by. */
    orderby?: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>;
    /** Use ID to return only children. Use 0 to return only top-level
     * 							items
     */
    parent?: Maybe<Scalars["String"]>;
    /** Specify objects whose parent is in an array */
    parentIn?: Maybe<Array<Maybe<Scalars["ID"]>>>;
    /** Specify posts whose parent is not in an array */
    parentNotIn?: Maybe<Array<Maybe<Scalars["ID"]>>>;
    /** Show posts with a specific password. */
    password?: Maybe<Scalars["String"]>;
    /** Show Posts based on a keyword search */
    search?: Maybe<Scalars["String"]>;
    stati?: Maybe<Array<Maybe<PostStatusEnum>>>;
    status?: Maybe<PostStatusEnum>;
    /** Tag Slug */
    tag?: Maybe<Scalars["String"]>;
    /** Use Tag ID */
    tagId?: Maybe<Scalars["String"]>;
    /** Array of tag IDs, used to display objects from one tag OR
     * 							another
     */
    tagIn?: Maybe<Array<Maybe<Scalars["ID"]>>>;
    /** Array of tag IDs, used to display objects from one tag OR
     * 							another
     */
    tagNotIn?: Maybe<Array<Maybe<Scalars["ID"]>>>;
    /** Array of tag slugs, used to display objects from one tag OR
     * 							another
     */
    tagSlugAnd?: Maybe<Array<Maybe<Scalars["String"]>>>;
    /** Array of tag slugs, used to exclude objects in specified
     * 							tags
     */
    tagSlugIn?: Maybe<Array<Maybe<Scalars["String"]>>>;
    taxQuery?: Maybe<UserToPageConnectionWhereArgsTaxQuery>;
    /** Title of the object */
    title?: Maybe<Scalars["String"]>;
};

export type UserToPageConnectionWhereArgsTaxArray = {
    taxonomy?: Maybe<TaxonomyEnum>;
    field?: Maybe<UserToPageConnectionWhereArgsTaxQueryField>;
    /** A list of term slugs */
    terms?: Maybe<Array<Maybe<Scalars["String"]>>>;
    /** Whether or not to include children for hierarchical
     * 											taxonomies. Defaults to false to improve performance (note that
     * 											this is opposite of the default for WP_Query).
     */
    includeChildren?: Maybe<Scalars["Boolean"]>;
    operator?: Maybe<UserToPageConnectionWhereArgsTaxQueryOperator>;
};

/** Query objects based on taxonomy parameters */
export type UserToPageConnectionWhereArgsTaxQuery = {
    relation?: Maybe<RelationEnum>;
    taxArray?: Maybe<Array<Maybe<UserToPageConnectionWhereArgsTaxArray>>>;
};

/** Which field to select taxonomy term by. Default value is "term_id" */
export enum UserToPageConnectionWhereArgsTaxQueryField {
    Id = "ID",
    Name = "NAME",
    Slug = "SLUG",
    Taxonomy_Id = "TAXONOMY_ID",
}

export enum UserToPageConnectionWhereArgsTaxQueryOperator {
    And = "AND",
    Exists = "EXISTS",
    In = "IN",
    Not_Exists = "NOT_EXISTS",
    Not_In = "NOT_IN",
}

/** Connection between the User type and the User type */
export type UserToPostConnection = {
    /** Edges for the UserToPostConnection connection */
    edges?: Maybe<Array<Maybe<UserToPostConnectionEdge>>>;
    /** The nodes of the connection, without the edges */
    nodes?: Maybe<Array<Maybe<Post>>>;
    /** Information about pagination in a connection. */
    pageInfo?: Maybe<WpPageInfo>;
    /** Information about the type of content being queried */
    postTypeInfo?: Maybe<PostType>;
};

/** An edge in a connection */
export type UserToPostConnectionEdge = {
    /** A cursor for use in pagination */
    cursor?: Maybe<Scalars["String"]>;
    /** The item at the end of the edge */
    node?: Maybe<Post>;
};

/** Arguments for filtering the UserToPostConnection connection */
export type UserToPostConnectionWhereArgs = {
    /** The user that's connected as the author of the object. Use the
     * 							userId for the author object.
     */
    author?: Maybe<Scalars["Int"]>;
    /** Find objects connected to author(s) in the array of author's userIds */
    authorIn?: Maybe<Array<Maybe<Scalars["ID"]>>>;
    /** Find objects connected to the author by the author's nicename */
    authorName?: Maybe<Scalars["String"]>;
    /** Find objects NOT connected to author(s) in the array of author's
     * 							userIds
     */
    authorNotIn?: Maybe<Array<Maybe<Scalars["ID"]>>>;
    /** Category ID */
    categoryId?: Maybe<Scalars["Int"]>;
    /** Array of category IDs, used to display objects from one
     * 										category OR another
     */
    categoryIn?: Maybe<Array<Maybe<Scalars["ID"]>>>;
    /** Use Category Slug */
    categoryName?: Maybe<Scalars["String"]>;
    /** Array of category IDs, used to display objects from one
     * 										category OR another
     */
    categoryNotIn?: Maybe<Array<Maybe<Scalars["ID"]>>>;
    /** Filter the connection based on dates */
    dateQuery?: Maybe<DateQueryInput>;
    /** True for objects with passwords; False for objects without passwords;
     * 							null for all objects with or without passwords
     */
    hasPassword?: Maybe<Scalars["Boolean"]>;
    /** Specific ID of the object */
    id?: Maybe<Scalars["Int"]>;
    /** Array of IDs for the objects to retrieve */
    in?: Maybe<Array<Maybe<Scalars["ID"]>>>;
    /** Get objects with a specific mimeType property */
    mimeType?: Maybe<MimeTypeEnum>;
    /** Slug / post_name of the object */
    name?: Maybe<Scalars["String"]>;
    /** Specify objects to retrieve. Use slugs */
    nameIn?: Maybe<Array<Maybe<Scalars["String"]>>>;
    /** Specify IDs NOT to retrieve. If this is used in the same query as "in",
     * 							it will be ignored
     */
    notIn?: Maybe<Array<Maybe<Scalars["ID"]>>>;
    /** What paramater to use to order the objects by. */
    orderby?: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>;
    /** Use ID to return only children. Use 0 to return only top-level
     * 							items
     */
    parent?: Maybe<Scalars["String"]>;
    /** Specify objects whose parent is in an array */
    parentIn?: Maybe<Array<Maybe<Scalars["ID"]>>>;
    /** Specify posts whose parent is not in an array */
    parentNotIn?: Maybe<Array<Maybe<Scalars["ID"]>>>;
    /** Show posts with a specific password. */
    password?: Maybe<Scalars["String"]>;
    /** Show Posts based on a keyword search */
    search?: Maybe<Scalars["String"]>;
    stati?: Maybe<Array<Maybe<PostStatusEnum>>>;
    status?: Maybe<PostStatusEnum>;
    /** Tag Slug */
    tag?: Maybe<Scalars["String"]>;
    /** Use Tag ID */
    tagId?: Maybe<Scalars["String"]>;
    /** Array of tag IDs, used to display objects from one tag OR
     * 							another
     */
    tagIn?: Maybe<Array<Maybe<Scalars["ID"]>>>;
    /** Array of tag IDs, used to display objects from one tag OR
     * 							another
     */
    tagNotIn?: Maybe<Array<Maybe<Scalars["ID"]>>>;
    /** Array of tag slugs, used to display objects from one tag OR
     * 							another
     */
    tagSlugAnd?: Maybe<Array<Maybe<Scalars["String"]>>>;
    /** Array of tag slugs, used to exclude objects in specified
     * 							tags
     */
    tagSlugIn?: Maybe<Array<Maybe<Scalars["String"]>>>;
    taxQuery?: Maybe<UserToPostConnectionWhereArgsTaxQuery>;
    /** Title of the object */
    title?: Maybe<Scalars["String"]>;
};

export type UserToPostConnectionWhereArgsTaxArray = {
    taxonomy?: Maybe<TaxonomyEnum>;
    field?: Maybe<UserToPostConnectionWhereArgsTaxQueryField>;
    /** A list of term slugs */
    terms?: Maybe<Array<Maybe<Scalars["String"]>>>;
    /** Whether or not to include children for hierarchical
     * 											taxonomies. Defaults to false to improve performance (note that
     * 											this is opposite of the default for WP_Query).
     */
    includeChildren?: Maybe<Scalars["Boolean"]>;
    operator?: Maybe<UserToPostConnectionWhereArgsTaxQueryOperator>;
};

/** Query objects based on taxonomy parameters */
export type UserToPostConnectionWhereArgsTaxQuery = {
    relation?: Maybe<RelationEnum>;
    taxArray?: Maybe<Array<Maybe<UserToPostConnectionWhereArgsTaxArray>>>;
};

/** Which field to select taxonomy term by. Default value is "term_id" */
export enum UserToPostConnectionWhereArgsTaxQueryField {
    Id = "ID",
    Name = "NAME",
    Slug = "SLUG",
    Taxonomy_Id = "TAXONOMY_ID",
}

export enum UserToPostConnectionWhereArgsTaxQueryOperator {
    And = "AND",
    Exists = "EXISTS",
    In = "IN",
    Not_Exists = "NOT_EXISTS",
    Not_In = "NOT_IN",
}

/** Connection between the User type and the User type */
export type UserToRevisionConnection = {
    /** Edges for the UserToRevisionConnection connection */
    edges?: Maybe<Array<Maybe<UserToRevisionConnectionEdge>>>;
    /** The nodes of the connection, without the edges */
    nodes?: Maybe<Array<Maybe<Revision>>>;
    /** Information about pagination in a connection. */
    pageInfo?: Maybe<WpPageInfo>;
    /** Information about the type of content being queried */
    postTypeInfo?: Maybe<PostType>;
};

/** An edge in a connection */
export type UserToRevisionConnectionEdge = {
    /** A cursor for use in pagination */
    cursor?: Maybe<Scalars["String"]>;
    /** The item at the end of the edge */
    node?: Maybe<Revision>;
};

/** Arguments for filtering the UserToRevisionConnection connection */
export type UserToRevisionConnectionWhereArgs = {
    /** The user that's connected as the author of the object. Use the
     * 							userId for the author object.
     */
    author?: Maybe<Scalars["Int"]>;
    /** Find objects connected to author(s) in the array of author's userIds */
    authorIn?: Maybe<Array<Maybe<Scalars["ID"]>>>;
    /** Find objects connected to the author by the author's nicename */
    authorName?: Maybe<Scalars["String"]>;
    /** Find objects NOT connected to author(s) in the array of author's
     * 							userIds
     */
    authorNotIn?: Maybe<Array<Maybe<Scalars["ID"]>>>;
    /** Category ID */
    categoryId?: Maybe<Scalars["Int"]>;
    /** Array of category IDs, used to display objects from one
     * 										category OR another
     */
    categoryIn?: Maybe<Array<Maybe<Scalars["ID"]>>>;
    /** Use Category Slug */
    categoryName?: Maybe<Scalars["String"]>;
    /** Array of category IDs, used to display objects from one
     * 										category OR another
     */
    categoryNotIn?: Maybe<Array<Maybe<Scalars["ID"]>>>;
    /** Filter the connection based on dates */
    dateQuery?: Maybe<DateQueryInput>;
    /** True for objects with passwords; False for objects without passwords;
     * 							null for all objects with or without passwords
     */
    hasPassword?: Maybe<Scalars["Boolean"]>;
    /** Specific ID of the object */
    id?: Maybe<Scalars["Int"]>;
    /** Array of IDs for the objects to retrieve */
    in?: Maybe<Array<Maybe<Scalars["ID"]>>>;
    /** Get objects with a specific mimeType property */
    mimeType?: Maybe<MimeTypeEnum>;
    /** Slug / post_name of the object */
    name?: Maybe<Scalars["String"]>;
    /** Specify objects to retrieve. Use slugs */
    nameIn?: Maybe<Array<Maybe<Scalars["String"]>>>;
    /** Specify IDs NOT to retrieve. If this is used in the same query as "in",
     * 							it will be ignored
     */
    notIn?: Maybe<Array<Maybe<Scalars["ID"]>>>;
    /** What paramater to use to order the objects by. */
    orderby?: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>;
    /** Use ID to return only children. Use 0 to return only top-level
     * 							items
     */
    parent?: Maybe<Scalars["String"]>;
    /** Specify objects whose parent is in an array */
    parentIn?: Maybe<Array<Maybe<Scalars["ID"]>>>;
    /** Specify posts whose parent is not in an array */
    parentNotIn?: Maybe<Array<Maybe<Scalars["ID"]>>>;
    /** Show posts with a specific password. */
    password?: Maybe<Scalars["String"]>;
    /** Show Posts based on a keyword search */
    search?: Maybe<Scalars["String"]>;
    stati?: Maybe<Array<Maybe<PostStatusEnum>>>;
    status?: Maybe<PostStatusEnum>;
    /** Tag Slug */
    tag?: Maybe<Scalars["String"]>;
    /** Use Tag ID */
    tagId?: Maybe<Scalars["String"]>;
    /** Array of tag IDs, used to display objects from one tag OR
     * 							another
     */
    tagIn?: Maybe<Array<Maybe<Scalars["ID"]>>>;
    /** Array of tag IDs, used to display objects from one tag OR
     * 							another
     */
    tagNotIn?: Maybe<Array<Maybe<Scalars["ID"]>>>;
    /** Array of tag slugs, used to display objects from one tag OR
     * 							another
     */
    tagSlugAnd?: Maybe<Array<Maybe<Scalars["String"]>>>;
    /** Array of tag slugs, used to exclude objects in specified
     * 							tags
     */
    tagSlugIn?: Maybe<Array<Maybe<Scalars["String"]>>>;
    taxQuery?: Maybe<UserToRevisionConnectionWhereArgsTaxQuery>;
    /** Title of the object */
    title?: Maybe<Scalars["String"]>;
};

export type UserToRevisionConnectionWhereArgsTaxArray = {
    taxonomy?: Maybe<TaxonomyEnum>;
    field?: Maybe<UserToRevisionConnectionWhereArgsTaxQueryField>;
    /** A list of term slugs */
    terms?: Maybe<Array<Maybe<Scalars["String"]>>>;
    /** Whether or not to include children for hierarchical
     * 											taxonomies. Defaults to false to improve performance (note that
     * 											this is opposite of the default for WP_Query).
     */
    includeChildren?: Maybe<Scalars["Boolean"]>;
    operator?: Maybe<UserToRevisionConnectionWhereArgsTaxQueryOperator>;
};

/** Query objects based on taxonomy parameters */
export type UserToRevisionConnectionWhereArgsTaxQuery = {
    relation?: Maybe<RelationEnum>;
    taxArray?: Maybe<Array<Maybe<UserToRevisionConnectionWhereArgsTaxArray>>>;
};

/** Which field to select taxonomy term by. Default value is "term_id" */
export enum UserToRevisionConnectionWhereArgsTaxQueryField {
    Id = "ID",
    Name = "NAME",
    Slug = "SLUG",
    Taxonomy_Id = "TAXONOMY_ID",
}

export enum UserToRevisionConnectionWhereArgsTaxQueryOperator {
    And = "AND",
    Exists = "EXISTS",
    In = "IN",
    Not_Exists = "NOT_EXISTS",
    Not_In = "NOT_IN",
}

/** WPNext Post type info extension */
export type WpNextPostType = {
    /** Post Type name */
    name: Scalars["String"];
};

/** Information about pagination in a connection. */
export type WpPageInfo = {
    /** When paginating forwards, the cursor to continue. */
    endCursor?: Maybe<Scalars["String"]>;
    /** When paginating forwards, are there more items? */
    hasNextPage: Scalars["Boolean"];
    /** When paginating backwards, are there more items? */
    hasPreviousPage: Scalars["Boolean"];
    /** When paginating backwards, the cursor to continue. */
    startCursor?: Maybe<Scalars["String"]>;
};

/** The writing setting type */
export type WritingSettings = {
    /** Default post category. */
    defaultCategory?: Maybe<Scalars["Int"]>;
    /** Default post format. */
    defaultPostFormat?: Maybe<Scalars["String"]>;
    /** Convert emoticons like :-) and :-P to graphics on display. */
    useSmilies?: Maybe<Scalars["Boolean"]>;
};
export type TagsFragment = { __typename?: "Post" } & {
    tags: Maybe<
        { __typename?: "PostToTagConnection" } & {
            edges: Maybe<
                Array<
                    Maybe<
                        { __typename?: "PostToTagConnectionEdge" } & {
                            node: Maybe<
                                { __typename?: "Tag" } & Pick<
                                    Tag,
                                    "name" | "slug"
                                >
                            >;
                        }
                    >
                >
            >;
        }
    >;
};

export type PostsQueryVariables = {};

export type PostsQuery = { __typename?: "RootQuery" } & {
    posts: Maybe<
        { __typename?: "RootQueryToPostConnection" } & {
            edges: Maybe<
                Array<
                    Maybe<
                        { __typename?: "RootQueryToPostConnectionEdge" } & {
                            node: Maybe<
                                { __typename?: "Post" } & Pick<
                                    Post,
                                    "id" | "title" | "content"
                                > &
                                    TagsFragment
                            >;
                        }
                    >
                >
            >;
        }
    >;
};
