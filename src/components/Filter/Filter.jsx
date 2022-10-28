import PropTypes from 'prop-types';

export const Filter = ({ chengeName }) => {
  return (
    <div
      style={{
        textAlign: 'center',
      }}
    >
      <p
        style={{
          fontSize: '20px',
        }}
      >
        Find contacts by name
      </p>
      <label>
        Filter
        <br />
        <input
          type="text"
          name="filter"
          onChange={chengeName}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
    </div>
  );
};

Filter.propTypes = {
  chengeName: PropTypes.func.isRequired,
};
