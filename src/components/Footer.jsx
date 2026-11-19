import TasksFilter from './TasksFilter';

function Footer({
  activeTasksCount = 0,
  onClearCompleted = () => {},
  filter = 'All',
  onFilterChange = () => {},
}) {
  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{activeTasksCount}</strong> items left
      </span>

      <TasksFilter filter={filter} onFilterChange={onFilterChange} />

      <button className="clear-completed" onClick={onClearCompleted}>
        Clear completed
      </button>
    </footer>
  );
}

export default Footer;
