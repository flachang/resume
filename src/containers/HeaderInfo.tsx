import { Info } from '../types';

type HeaderInfoProps = {
	info: Info;
};

const getContactLabel = (type: string): string => {
	const labels: Record<string, string> = {
		phone: '电话',
		wechat: '微信',
		email: '邮箱',
		github: 'GitHub',
		linkedin: 'LinkedIn',
	};
	return labels[type] || type;
};

const getContactHref = (type: string, value: string | number): string => {
	if (type === 'email') {
		return `mailto:${value}`;
	}
	if (type === 'phone') {
		return `tel:${value}`;
	}
	return '#';
};

export const HeaderInfo = ({ info }: HeaderInfoProps) => {
	return (
		<div className="person-info">
			<div className="title">
				<h1>{info.name}</h1>
			</div>

			{info.description && (
				<div className="sub-title">
					<p>{info.description}</p>
				</div>
			)}

			<div className="contact-info">
				{info.contacts.map((contact, index) => (
					<span key={index} className="contact-item">
						<span className="contact-type">{getContactLabel(contact.type)}:</span>
						{contact.type === 'email' || contact.type === 'phone' ? (
							<a
								href={getContactHref(contact.type, contact.value)}
								className="contact-value"
							>
								{contact.value}
							</a>
						) : (
							<span className="contact-value">{contact.value}</span>
						)}
					</span>
				))}
			</div>
		</div>
	);
};