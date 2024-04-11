import { collection, limit, query, onSnapshot, type FirestoreDataConverter } from "firebase/firestore";
import Author from "../author";
import { readable } from "svelte/store";
import { db } from "$lib/firebase";

export default class Post {
    title: string;
    author: Author;
    id: string | undefined;
    constructor(title: string, author: Author, id?: string) {
        this.title = title;
        this.author = author;
        this.id = id;
    }
}

export const postConverter: FirestoreDataConverter<Post> = {
    toFirestore: (post: Post) => ({
        title: post.title,
        author: {
            firstName: post.author.firstName,
            lastName: post.author.lastName
        }
    }),
    fromFirestore: function(snapshot, options) {
        const { title, author } = snapshot.data(options) as Post;
        return new Post(title, new Author(author.firstName, author.lastName), snapshot.id)
    }
}

export const postStore = readable<Post[]>([], function start(set) {
    const q = query(collection(db, 'post').withConverter(postConverter), limit(10));

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
        let posts: Post[] = [];
        querySnapshot.forEach((e) => {
            posts.push(e.data());
        });
        set(posts);
    });

    return unsubscribe;
});
