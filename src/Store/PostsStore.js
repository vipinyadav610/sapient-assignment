import { observable, action } from "mobx";
import FetchBase from "../Api/FetchBase";

class PostsStore extends FetchBase {
  @observable loading = false;
  @observable posts = [];

  @action.bound
  async getPosts() {
    try {
      this.loading = true;
      const response = await this.get("/character");
      this.posts = response.results;
      this.loading = false;
    } catch (e) {
      console.log("eror", e);
      this.loading = false;
    }
  }
}

export default PostsStore;
