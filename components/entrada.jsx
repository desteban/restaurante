export default function entrada(props) {
	return (
		<div className="input">
			<label htmlFor={props.id}>{props.label}</label>
			<input
				type={props.type ? props.type : 'text'}
				name={props.id}
				id={props.id}
				placeholder={props.placeholder}
				value={props.value}
				onChange={props.onChange}
			/>
		</div>
	);
}
