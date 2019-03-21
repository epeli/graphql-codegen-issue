import React from "react";
import { useQuery } from "react-apollo-hooks";
import { oc } from "ts-optchain";
import { PostsQuery, TagsFragment } from "./types";
import { notEmpty } from "./utils";

export function PostList() {
    const res = useQuery<PostsQuery>(null);

    const posts = oc(res)
        .data.posts.edges([])
        .filter(notEmpty)
        .map(edge => edge.node)
        .filter(notEmpty);

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

function TagList(props: { tags: TagsFragment["tags"] }) {
    const tags = oc(props.tags)
        .edges([])
        .filter(notEmpty)
        .map(edge => edge.node)
        .filter(notEmpty);

    return (
        <div>
            {tags.map(tag => (
                <div>{tag.name}</div>
            ))}
        </div>
    );
}
