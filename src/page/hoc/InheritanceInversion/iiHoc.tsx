export const iiHoc = WrappedComponent =>
  class extends WrappedComponent {
    // componentDidMount() {
    //   console.log(this.state, 'state');
    // }

    render() {
      console.log(this.state, "state");
      return super.render();
    }
  };
