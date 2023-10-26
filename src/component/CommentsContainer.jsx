/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import { GenerateName } from "../helper/NameHelper";

const commentsdata = [
  {
    name: GenerateName(),
    text: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old",
    replies: [],
  },
  {
    name: GenerateName(),
    text: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old",
    replies: [
      {
        name: GenerateName(),
        text: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old",
        replies: [
            {
                name: GenerateName(),
                text: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old",
                replies: [
                    {
                        name: GenerateName(),
                        text: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old",
                        replies: [],
                      },
                      {
                        name: GenerateName(),
                        text: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old",
                        replies: [],
                      },
                ],
              },
        ],
      },
      {
        name: GenerateName(),
        text: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old",
        replies: [],
      },
      {
        name: GenerateName(),
        text: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old",
        replies: [],
      },
      {
        name: GenerateName(),
        text: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old",
        replies: [],
      },
      {
        name: GenerateName(),
        text: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old",
        replies: [],
      },
      {
        name: GenerateName(),
        text: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old",
        replies: [],
      },
      {
        name: GenerateName(),
        text: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old",
        replies: [],
      },
      {
        name: GenerateName(),
        text: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old",
        replies: [],
      },
      {
        name: GenerateName(),
        text: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old",
        replies: [],
      },
    ],
  },
  {
    name: GenerateName(),
    text: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old",
    replies: [],
  },
  {
    name: GenerateName(),
    text: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old",
    replies: [],
  },
];

const CommentsCard = ({ data }) => {
  const { name, text } = data;

  return (
    <div className=" bg-slate-300 flex gap-4 my-2">
      <img
        className="h-10"
        src="https://cdn-icons-png.flaticon.com/512/3177/3177440.png"
        alt="image not found"
      />
      <div>
        <p className="font-bold">{name} </p>
        <p>{text}</p>
      </div>
    </div>
  );
};
const CommentsList = ({ allComments }) => {
  return allComments.map((val, index) => (
    <div key={index}>
      <CommentsCard  data={val} />
      <div className="pl-5 border-l-black ml-5">
        {/* //this is recurisve function */}
        <CommentsList allComments ={val.replies}/>
      </div>
    </div>
  ));
};

const CommentsContainer = () => {
  return (
    <div className="my-6 p-2 ">
      <h1 className="text-2xl font-bold">Comments</h1>
      <CommentsList allComments={commentsdata} />
    </div>
  );
};

export default CommentsContainer;
