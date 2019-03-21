import React from "react";
import { useQuery } from "react-apollo-hooks";
import { oc } from "ts-optchain";
import { PostsQuery } from "./types";
import { notEmpty } from "./utils";

export function PostList() {
    const res = useQuery<PostsQuery>(null);

    const posts = oc(res)
        .data.posts.edges([])
        .filter(notEmpty)
        .map(edge => edge.node);

    return (
        <div>
            {posts.map(post => (
                <div>
                    <title>{post.title}</title>
                    <TagList tags={post.tags} />
                </div>
            ))}
        </div>
    );
}

type ArrayType<T> = T extends Array<infer V> ? V : never;

type PostsTags = NonNullable<
    ArrayType<NonNullable<PostsQuery["posts"]>["edges"]>["node"]
>["tags"];

function TagList(props: { tags: PostsTags }) {
    const tags = oc(props.tags)
        .edges([])
        .filter(notEmpty)
        .map(edge => edge.node);

    return (
        <div>
            {tags.map(tag => (
                <div>{tag.name}</div>
            ))}
        </div>
    );
}
