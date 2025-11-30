function NewToDoForm({ newItem, setNewItem, handleSubmit }) {
  return (
    <form className="new-item-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <label htmlFor="item" value={newItem} onChange={(e) => setNewItem(e.target.value)}>New Item</label>
        <input
          type="text"
          id="item"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
        />
      </div>
      <button className="btn">Add</button>
    </form>
  );
}

export default NewToDoForm;
