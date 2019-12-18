import PostsStore from "./PostsStore";

export default class CombinedStore {
  constructor() {
    this.posts = new PostsStore(this);
  }
}
