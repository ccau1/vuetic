import serverApi from "../apiClients/serverApi";
import qs from "qs";
import { PostSearch } from "../typings";
import { Post } from "../typings";

export const getPosts = async (filters: PostSearch): Promise<any> =>
  (await serverApi.get(`posts?${qs.stringify(filters)}`)).data;

export const getPostById = async (_id: string): Promise<any> =>
  (await serverApi.get(`posts/${_id}`)).data;

export const getPostBySlug = async (slug: string): Promise<any> =>
  (await serverApi.get(`posts/slugs/${slug}`)).data;

export const addPost = async (post: Post) =>
  (await serverApi.post("posts", post)).data;
