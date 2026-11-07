import { MouseEvent, useState } from 'react';

import { Mask } from './containers/Mask';
import { HeaderInfo } from './containers/HeaderInfo';
import { Education } from './containers/Education';
import { Skills } from './containers/Skills';
import { Projects } from './containers/Projects';
import { Work } from './containers/Work';
import { Thanks } from './containers/Thanks';
import resumeData from './config.json';
import { ResumeData } from './types';

import './App.scss';

const App = () => {
	const data = resumeData as ResumeData;
	const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

	const onAppMouseMove = (e: MouseEvent<HTMLDivElement>) => {
		const rect = e.currentTarget.getBoundingClientRect();
		setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
	};

	return (
		<div className="resume-content" onMouseMove={onAppMouseMove}>
			<Mask mousePos={mousePos} />

			<div className="app-initial-children">
				<HeaderInfo info={data.info} />
				<Education education={data.education} />
				<Skills skills={data.skills} />
				<Projects projects={data.projects} />
				<Work work={data.work} />
				<Thanks thanks={data.thanks} />
			</div>
		</div>
	);
};

export default App;
