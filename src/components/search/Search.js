import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import axios from "axios";
import ImageResults from "../image-results/ImageResults";

class Search extends Component {
  state = {
    searchImage: "",
    amount: 5,
    apiURL: "https://pixabay.com/api/",
    apiKey: "10889030-18bc9bf747d9f7a7b951849c7",
    images: []
  };

  textChangeHanlder = e => {
    const val = e.target.value;
    this.setState({ [e.target.id]: val }, () => {
      if (val === "") {
        this.setState({ images: [] });
      } else {
        axios
          .get(
            `${this.state.apiURL}/?key=${this.state.apiKey}&q=${
              this.state.searchImage
            }&image_type=photo&per_page=${this.state.amount}&safesearch=true`
          )
          .then(res => this.setState({ images: res.data.hits }))
          .catch(err => alert("Couldn't get data from the api. Sorry!"));
      }
    });
  };

  amountChangeHandler = e => this.setState({ [e.target.name]: e.target.value });
  render() {
    console.log(this.state.images);
    return (
      <div>
        <TextField
          id="searchImage"
          label="Search for images"
          value={this.state.searchImage}
          onChange={this.textChangeHanlder}
          fullWidth={true}
        />
        <br />
        <Select
          value={this.state.amount}
          onChange={this.amountChangeHandler}
          inputProps={{
            name: "amount",
            id: "amount"
          }}
        >
          <MenuItem value={5}>
            <em>Five</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
        <br />
        {this.state.images.length > 0 ? (
          <ImageResults images={this.state.images} />
        ) : null}
      </div>
    );
  }
}
export default Search;
