// App imports
import './styles.scss';

export const Arrow = () => {
	return (
		<div className="pdf-arrow-wrapper">
			<svg viewBox="0 0 20 20">
				<path 
					transform="translate(0, 9)"
					fill="rgba(0, 0, 0, 1)"
					d="
						M9.211364 7.59931l
						4.48338 -4.867229c
						.407008 -.441854
						.407008 -1.158247 
						0 -1.60046l
						-.73712 -.80023c
						-.407008 -.441854
						-1.066904 -.441854
						-1.474243 0L7 
						5.198617 2.51662
						.33139c -.407008 
						-.441853 -1.066904
						-.441853-1.474243 
						0l -.737121
						.80023c -.407008
						.441854 -.407008 
						1.158248 0 
						1.600461l 4.48338 
						4.867228L7 10l2.211364 
						-2.40069z
					"
				/>
			</svg>
		</div>
	)
}

Arrow.displayName="Arrow";