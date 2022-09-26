import React from "react";
import "./team.css";

const Team = () => {
  const data = [
    {
      id: 1,
      name: "Jane Doe",
      content:
        "Proident eiusmod commodo dolore proident anim ea veniam duis eiusmod eiusmod velit ad exercitation cupidatat. Ullamco consectetur nisi duis dolore ea tempor nostrud esse deserunt. Ut non commodo labore eu voluptate. Excepteur anim aute commodo eiusmod minim nisi laboris reprehenderit id ad qui mollit. Nisi nostrud veniam ex est.",
      img:
        "https://images.pexels.com/photos/2681751/pexels-photo-2681751.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 2,
      name: "Jane Doe",
      content:
        "Proident eiusmod commodo dolore proident anim ea veniam duis eiusmod eiusmod velit ad exercitation cupidatat. Ullamco consectetur nisi duis dolore ea tempor nostrud esse deserunt. Ut non commodo labore eu voluptate. Excepteur anim aute commodo eiusmod minim nisi laboris reprehenderit id ad qui mollit. Nisi nostrud veniam ex est.",
      img:
        "https://images.pexels.com/photos/2681751/pexels-photo-2681751.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 3,
      name: "Jane Doe",
      content:
        "Proident eiusmod commodo dolore proident anim ea veniam duis eiusmod eiusmod velit ad exercitation cupidatat. Ullamco consectetur nisi duis dolore ea tempor nostrud esse deserunt. Ut non commodo labore eu voluptate. Excepteur anim aute commodo eiusmod minim nisi laboris reprehenderit id ad qui mollit. Nisi nostrud veniam ex est.",
      img:
        "https://images.pexels.com/photos/2681751/pexels-photo-2681751.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 4,
      name: "Jane Doe",
      content:
        "Proident eiusmod commodo dolore proident anim ea veniam duis eiusmod eiusmod velit ad exercitation cupidatat. Ullamco consectetur nisi duis dolore ea tempor nostrud esse deserunt. Ut non commodo labore eu voluptate. Excepteur anim aute commodo eiusmod minim nisi laboris reprehenderit id ad qui mollit. Nisi nostrud veniam ex est.",
      img:
        "https://images.pexels.com/photos/2681751/pexels-photo-2681751.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 5,
      name: "Jane Doe",
      content:
        "Proident eiusmod commodo dolore proident anim ea veniam duis eiusmod eiusmod velit ad exercitation cupidatat. Ullamco consectetur nisi duis dolore ea tempor nostrud esse deserunt. Ut non commodo labore eu voluptate. Excepteur anim aute commodo eiusmod minim nisi laboris reprehenderit id ad qui mollit. Nisi nostrud veniam ex est.",
      img:
        "https://images.pexels.com/photos/2681751/pexels-photo-2681751.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 6,
      name: "Jane Doe",
      content:
        "Proident eiusmod commodo dolore proident anim ea veniam duis eiusmod eiusmod velit ad exercitation cupidatat. Ullamco consectetur nisi duis dolore ea tempor nostrud esse deserunt. Ut non commodo labore eu voluptate. Excepteur anim aute commodo eiusmod minim nisi laboris reprehenderit id ad qui mollit. Nisi nostrud veniam ex est.",
      img:
        "https://images.pexels.com/photos/2681751/pexels-photo-2681751.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ];

  return (
    <div className="container team">
      <div className="section-title">
        <h5>Team Members</h5>
        <span className="line"></span>
      </div>
      <div className="row">
        {data.map((item, index) => (
          <div className="col-xs-4 col-lg-4 col-sm-12 col-md-2">
            <div class="card  team-members-item">
              <img src={item.img} alt="Team Members" />
              <div className="team-info">
                <h6>{item.name}</h6>
                <p>{item.content}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
