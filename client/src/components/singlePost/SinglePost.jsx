import "./SinglePost.css";

const SinglePost = () => {
  return (
    <div className="singlepost">
      <div className="singlePostWrapper">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Landscape_Arnisee-region.JPG/1200px-Landscape_Arnisee-region.JPG"
          alt=""
          className="singlePostImg"
        />
        <h1 className="singlePostTitle">
          Single Post Title
          <div className="singlePostEdit">
            <i className="singlePostIcon far fa-edit"></i>
            <i className="singlePostIcon far fa-trash-alt"></i>
          </div>
        </h1>
      </div>
      <div className="singlePostInfo">
        <span className="singlePostAuthor">
          Author:<b>Sheshank</b>
        </span>
        <span className="singlePostDate">1 hour ago</span>
      </div>
      <p className="singlePostDesc">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum
        numquam repudiandae dignissimos architecto obcaecati id ipsum. Quas
        corporis excepturi eos a eum labore nulla fuga. Perspiciatis ea quidem
        quod illo! Nemo sit cupiditate error excepturi eveniet nobis omnis!
        Fugit maiores cumque, veritatis aliquid possimus at animi saepe minus,
        vitae amet iste delectus. Nulla vero blanditiis voluptatibus totam
        repellendus sequi corporis! Voluptatem nisi et similique, inventore
        repellendus labore accusamus voluptatum molestiae rem doloribus
        consectetur expedita sequi porro ea beatae illo, voluptatibus odit
        impedit, hic ut saepe. Iure similique consequatur aliquid. Facilis.
        Minus illum rem nam deleniti libero, laborum tenetur voluptate nesciunt,
        iste rerum numquam laudantium? A illo aut aliquam aliquid non ipsa, hic
        corporis consequatur? Unde atque ratione at omnis harum. Vel soluta
        harum quas, praesentium unde voluptas facilis voluptate accusantium
        autem dolores veritatis? Nihil natus impedit nesciunt magni vel
        perferendis similique id fuga voluptas, delectus error, vero
        voluptatibus rerum exercitationem.
      </p>
    </div>
  );
};

export default SinglePost;
