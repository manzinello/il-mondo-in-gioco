import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";

const styles = theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    marginLeft: 8,
    marginRight: 8,
    marginTop: 16,
    backgroundColor: theme.palette.background.paper
  },
  gridList: {
    width: "100%",
    height: "100%",
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: "translateZ(0)"
  },
  titleBar: {
    background:
      "linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, " +
      "rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)"
  },
  icon: {
    color: "white"
  }
});

const tileData = [
  {
    img: "https://material-ui.com/static/images/grid-list/burgers.jpg",
    title: "Image",
    author: "author",
    featured: false
  },
  {
    img: "https://material-ui.com/static/images/grid-list/burgers.jpg",
    title: "Image",
    author: "author",
    featured: false
  },
  {
    img: "https://material-ui.com/static/images/grid-list/burgers.jpg",
    title: "Image",
    author: "author",
    featured: false
  },
  {
    img: "https://material-ui.com/static/images/grid-list/burgers.jpg",
    title: "Image",
    author: "author",
    featured: false
  },
  {
    img: "https://material-ui.com/static/images/grid-list/burgers.jpg",
    title: "Image",
    author: "author",
    featured: false
  },
  {
    img: "https://material-ui.com/static/images/grid-list/burgers.jpg",
    title: "Image",
    author: "author",
    featured: false
  }
];

function Main(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <GridList
        cols={3}
        cellHeight={300}
        spacing={16}
        className={classes.gridList}
      >
        {tileData.map(tile => (
          <GridListTile
            key={tile.img}
            cols={1}
            rows={1}
            onClick={() => {
              props.handleVideo("video");
            }}
          >
            <img src={tile.img} alt={tile.title} />
            <GridListTileBar
              title={tile.title}
              titlePosition="top"
              actionPosition="left"
              className={classes.titleBar}
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}

Main.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Main);
