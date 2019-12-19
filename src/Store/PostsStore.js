import { observable, action, computed } from "mobx";
import FetchBase from "../Api/FetchBase";

class PostsStore extends FetchBase {
  @observable loading = false;
  @observable posts = [];
  @observable searchValue = "";
  @observable filterByFields = ["name"];
  @observable sortBy = "id";
  @observable sortOrder = "ASC";

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

  @computed
  get filterPostList() {
    const posts = this.posts.filter(item => {
      for (let key in item) {
        if (this.filterByFields.includes(key)) {
          let v = item[key] && item[key].toString().toLowerCase();
          if (v && v.indexOf(this.searchValue.toLowerCase()) !== -1) {
            return true;
          }
        }
      }
      return false;
    });
    return posts.sort((a, b) => {
      if (a[this.sortBy] < b[this.sortBy]) {
        return this.sortOrder === "ASC" ? -1 : 1;
      }
      if (a[this.sortBy] > b[this.sortBy]) {
        return this.sortOrder === "ASC" ? 1 : -1;
      }
      return 0;
    });
  }

  @action.bound
  onSearchPost(value) {
    this.searchValue = value;
  }
  @action.bound
  onSortOrderChange(e) {
    this.sortOrder = e.target.value;
  }
  @action.bound
  onSortByChange(e) {
    this.sortBy = e.target.value;
  }
}

export default PostsStore;
