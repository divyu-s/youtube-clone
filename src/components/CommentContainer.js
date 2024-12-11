import User_Icon from "../assets/user-icon.svg";
const commentData = [
  {
    name: "Divyanshu Shukla",
    text: "Reference site about Lorem Ipsum, giving information on its origins",
    replies: [],
  },
  {
    name: "Divyanshu Shukla",
    text: "Reference site about Lorem Ipsum, giving information on its origins",
    replies: [
      {
        name: "Divyanshu Shukla",
        text: "Reference site about Lorem Ipsum, giving information on its origins",
        replies: [],
      },
      {
        name: "Divyanshu Shukla",
        text: "Reference site about Lorem Ipsum, giving information on its origins",
        replies: [
          {
            name: "Divyanshu Shukla",
            text: "Reference site about Lorem Ipsum, giving information on its origins",
            replies: [
              {
                name: "Divyanshu Shukla",
                text: "Reference site about Lorem Ipsum, giving information on its origins",
                replies: [],
              },
              {
                name: "Divyanshu Shukla",
                text: "Reference site about Lorem Ipsum, giving information on its origins",
                replies: [],
              },
            ],
          },
          {
            name: "Divyanshu Shukla",
            text: "Reference site about Lorem Ipsum, giving information on its origins",
            replies: [
              {
                name: "Divyanshu Shukla",
                text: "Reference site about Lorem Ipsum, giving information on its origins",
                replies: [],
              },
              {
                name: "Divyanshu Shukla",
                text: "Reference site about Lorem Ipsum, giving information on its origins",
                replies: [],
              },
            ],
          },
        ],
      },
      {
        name: "Divyanshu Shukla",
        text: "Reference site about Lorem Ipsum, giving information on its origins",
        replies: [],
      },
    ],
  },
  {
    name: "Divyanshu Shukla",
    text: "Reference site about Lorem Ipsum, giving information on its origins",
    replies: [],
  },
  {
    name: "Divyanshu Shukla",
    text: "Reference site about Lorem Ipsum, giving information on its origins",
    replies: [],
  },
];

const Comment = ({ data }) => {
  const { name, text } = data;

  return (
    <div className="flex shadow-sm bg-gray-100 p-2 rounded-lg my-2">
      <img className="w-12 h-12" src={User_Icon} alt="user" />
      <div className="px-3">
        <p className="font-bold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

const CommentList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div>
      <Comment data={comment} key={index} />
      <div className="pl-5 border border-l-black ml-5">
        <CommentList comments={comment.replies} key={index} />
      </div>
    </div>
  ));
};

const CommentsContainer = () => {
  return (
    <div className="m-5 p-2">
      <h1 className="text-2xl font-bold">Comments : </h1>
      <CommentList comments={commentData} />
    </div>
  );
};

export default CommentsContainer;
