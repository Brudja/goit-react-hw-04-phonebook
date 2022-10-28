import PropTypes from 'prop-types';

export const ContactList = ({deleteBtn, filterFn}) => {
  return (
    <ul style={{
      listStyle: 'none',
      fontSize:'20px',
    }}>
      {filterFn.map(item => (
        <li key={item.id}>
          <p style={{
      margin: '10 auto'
    }}>{item.name}</p>
          <p style={{
      margin: '10 auto',
    }}>{item.number}</p>
          <button style={{
          color:"red",
          backgroundColor: "gray",
        }} onClick={() => deleteBtn(item.id)} type="button">Delete</button>
        </li>
      ))}
    </ul>
  );
};


ContactList.propTypes = {
  deleteBtn: PropTypes.func.isRequired,
  filterFn: PropTypes.arrayOf(PropTypes.shape({name:PropTypes.string, number:PropTypes.string, id:PropTypes.string})).isRequired,
}