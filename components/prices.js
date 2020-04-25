class Prices extends React.Component {
  state = {
    currency: "USD",
  };

  render() {
    return (
      <div>
        <ul className="list-group">
          <li className="list-group-item">
            Bitcoin rate for {this.props.bpi.bpi[this.state.currency].description}:
            <span className="badge badge-primary">
              {this.props.bpi.bpi[this.state.currency].code}
            </span>
            <strong>{this.props.bpi.bpi[this.state.currency].rate}</strong>
          </li>
          <li className="list-group-item">
              Time updated: {this.props.bpi.time.updated}
          </li>
        </ul>
        <br />
        <select
          onChange={(e) => this.setState({ currency: e.target.value })}
          className="form-control"
        >
          <option value="USD">USD</option>
          <option value="GBP">GBP</option>
          <option value="EUR">EUR</option>
        </select>

        <style jsx>
          {`
            .badge.badge-primary {
              margin-right: 0.3em;
              margin-left: 1em;
            }
          `}
        </style>
      </div>
    );
  }
}

export default Prices;
