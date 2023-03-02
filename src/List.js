import React from 'react';

const List = ( {people}) => {
  return (
    <>
      <ul>
              {
                people.map((person) => {
                  const {id, image, name, age} = person;
                  return (<li className="person" key={id}><img src={image} alt={name} />
                  <div><h4>{name}</h4><p>{age} years</p></div></li>)
                })
              }
      </ul>
    </>
  );
};

export default List;
