import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

const Button = (props) => {

	const { text, whenPressed, children } = props;
	const { buttonTextStyle, buttonStyle } = styles;
	return (
		<TouchableOpacity onPress={whenPressed} style={styles.buttonStyle}>
			<Text style={styles.buttonTextStyle}>{children}</Text>
		</TouchableOpacity>
	);
};

const styles = {
	buttonStyle: {
		flex: 1,
		alignSelf: 'stretch',
		backgroundColor: '#fff',
		borderRadius: 5,
		borderWidth: 1,
		borderColor: '#007aff',
		marginLeft: 5,
		marginRight: 5
	},
	buttonTextStyle: {
		alignSelf: 'center',
		color: '#007aff',
		fontSize: 16,
		fontWeight: '600',
		paddingTop: 10,
		paddingBottom: 10
	}
};

export default Button;
