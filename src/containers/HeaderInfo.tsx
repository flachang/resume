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

const getContactHref = (type: string, value: string | number): string | undefined => {
	if (type === 'email') {
		return `mailto:${value}`;
	}
	if (type === 'phone') {
		return `tel:${value}`;
	}
	if (type === 'github' || type === 'linkedin') {
		return String(value);
	}
	return undefined;
};

export const HeaderInfo = ({ info }: HeaderInfoProps) => {
	return (
		<header className="person-info">
			<div className="title">
				<h1>{info.name}</h1>
			</div>

			<div className="contact-info">
				{info.contacts.map((contact) => {
					const href = getContactHref(contact.type, contact.value);
					return (
						<span key={contact.type} className="contact-item">
							<span className="contact-type">{getContactLabel(contact.type)}:</span>
							{href ? (
								<a href={href} className="contact-value">
									{contact.value}
								</a>
							) : (
								<span className="contact-value">{contact.value}</span>
							)}
						</span>
					);
				})}
			</div>

			{info.description && (
				<div className="sub-title">
					<p>{info.description}</p>
				</div>
			)}
		</header>
	);
};
