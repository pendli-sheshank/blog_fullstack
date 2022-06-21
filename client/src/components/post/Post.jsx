import "./Post.css";

const Post = () => {
  return (
    <div className="post">
      <img
        src="https://phlearn.com/wp-content/uploads/2020/01/annie-spratt-ogDort6vKuE-unsplash.jpg"
        alt=""
        className="postImg"
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCats">Music</span>
          <span className="postCats">Life</span>
        </div>
        <span className="postTitle">Lore ipsum dolor</span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus aliquam
        fugit consequuntur architecto necessitatibus deleniti blanditiis eius
        impedit eveniet, reprehenderit nam quas ipsam sed nostrum odit
        voluptatibus dolores quis tenetur. Ullam laboriosam iure blanditiis,
        consectetur quod odio, fuga nostrum quia, minima animi reprehenderit.
        Corrupti vitae, corporis culpa modi eaque eos iste repellat quod
        molestias, incidunt ad minima distinctio, beatae fuga? Voluptate vero
        ipsam quisquam, itaque tempore natus minima asperiores molestiae cum
        obcaecati voluptatem illum quasi dolor perspiciatis commodi reiciendis,
      </p>
    </div>
  );
};

export default Post;
