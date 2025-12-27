import { MouseEvent, useState } from 'react';

import { Mask } from './containers/Mask';
import { HeaderInfo } from './containers/HeaderInfo';
import { Education } from './containers/Education';
import { Skills } from './containers/Skills';
import resumeData from './config.json';
import { ResumeData } from './types';

import './App.scss';

const App = () => {
	const data = resumeData as ResumeData;
	const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

	const onAppMouseMove = (e: MouseEvent) => {
		setMousePos({ x: e.clientX, y: e.clientY });
	};

	return (
		<div className="resume-content" onMouseMove={onAppMouseMove}>
			<Mask mousePos={mousePos} />

			<div className="app-initial-children">
				<HeaderInfo info={data.info} />
				<Education education={data.education} />
				<Skills skills={data.skills} />
			</div>
		</div>
	);
};

export default App;