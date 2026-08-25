function TaskFilter({
  tasks,
  status,
  priority,
  onStatusChange,
  onPriorityChange
}) {

  return (
    <div>
      <h1>Filter Tasks</h1>

      <div>
        <label htmlFor="status-filter">By Status</label>

        <select
          id="status-filter"
          value={status}
          onChange={(e) => onStatusChange(e.target.value)}
        >
          <option value="all">All</option>
          <option value="pending">Pending</option>
          <option value="in_progress">In progress</option>
          <option value="completed">Completed</option>
        </select>
      </div>

      <div>
        <label htmlFor="priority-filter">By Priority</label>

        <select
          id="priority-filter"
          value={priority}
          onChange={(e) => onPriorityChange(e.target.value)}
        >
          <option value="all">All</option>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
      </div>

      <button
        type="button"
        onClick={() => {
          setSearch("")
          onStatusChange("all")
          onPriorityChange("all")
        }}
      >
        Clear Filters
      </button>
    </div>
  )
}

export default TaskFilter