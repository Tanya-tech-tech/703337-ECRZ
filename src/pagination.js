function Pagination({onListItemAdd}) {
  return (
    <div className="pagination-cover">
      <ul className="pagination">
          <li className="pagination-item item-prev"><i className="fa fa-angle-left" aria-hidden="true"></i>prev</li>
          <li className="pagination-item active">1</li>
          <li className="pagination-item">2</li>
          <li className="pagination-item">3</li>
          <li className="pagination-item">4</li>
          <li className="pagination-item">5</li>
          <li className="pagination-item item-next"><i className="fa fa-angle-right" aria-hidden="true"></i>next</li>
      </ul>
    </div>
  )
}


export default Pagination;


