
import { TailSpin } from  'react-loader-spinner'
import styled from 'styled-components';

const Container = styled.div`
	position: absolute;
  left: calc(50% - 40px);
  top: calc(50% - 40px);
  background-color: transparent;
  z-index: 100;
`;

function Loader() {
  return (
		<Container>
			<TailSpin
				color="black"
				ariaLabel="tail-spin-loading"
				visible={true}
			/>
		</Container>
  );
}

export default Loader;
