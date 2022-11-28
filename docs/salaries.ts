/**
 * To calculate a fair price,
 * we have to consider the average developer salary.
 * All values are from Dec 2022. Do not forget to include inflation.
 *
 * Salaries are from:
 * @link https://www.salaryexpert.com/salary/job/front-end-developer/india
 *
 * Country are from:
 * @link https://gist.github.com/keeguon/2310008?permalink_comment_id=4367528#gistcomment-4367528
 */
export type AverageFrontEndDeveloperSalaryOfCountry = {
    name: string;
    code: string;
    /**
     * Salary is in € euro!
     */
    salary: number;
};

/**
 * Countries where I could not find a value, are commented out.
 */
export const AVERAGE_FRONT_END_DEVELOPER_SALARY_BY_COUNTRY: AverageFrontEndDeveloperSalaryOfCountry[] = [
    // { 'name': 'Afghanistan', 'code': 'AF', salary: false },
    // { 'name': 'Åland Islands', 'code': 'AX', salary: false },
    // { 'name': 'Albania', 'code': 'AL', salary: false },
    // { 'name': 'Algeria', 'code': 'DZ', salary: false },
    // { 'name': 'American Samoa', 'code': 'AS', salary: false },
    // { 'name': 'Andorra', 'code': 'AD', salary: false },
    // { 'name': 'Angola', 'code': 'AO', salary: false },
    // { 'name': 'Anguilla', 'code': 'AI', salary: false },
    // { 'name': 'Antarctica', 'code': 'AQ', salary: false },
    { 'name': 'Antigua and Barbuda', 'code': 'AG', salary: 49527 },
    { 'name': 'Argentina', 'code': 'AR', salary: 17158 },
    // { 'name': 'Armenia', 'code': 'AM', salary: false },
    // { 'name': 'Aruba', 'code': 'AW', salary: false },
    { 'name': 'Australia', 'code': 'AU', salary: 76036 },
    { 'name': 'Austria', 'code': 'AT', salary: 59383 },
    // { 'name': 'Azerbaijan', 'code': 'AZ', salary: false },
    { 'name': 'Bahamas', 'code': 'BS', salary: 62024 },
    // { 'name': 'Bahrain', 'code': 'BH', salary: false },
    // { 'name': 'Bangladesh', 'code': 'BD', salary: false },
    // { 'name': 'Barbados', 'code': 'BB', salary: false },
    { 'name': 'Belarus', 'code': 'BY', salary: 5749 },
    { 'name': 'Belgium', 'code': 'BE', salary: 63749 },
    // { 'name': 'Belize', 'code': 'BZ', salary: false },
    // { 'name': 'Benin', 'code': 'BJ', salary: false },
    { 'name': 'Bermuda', 'code': 'BM', salary: 86590 },
    // { 'name': 'Bhutan', 'code': 'BT', salary: false },
    // { 'name': 'Bolivia', 'code': 'BO', salary: false },
    { 'name': 'Bosnia and Herzegovina', 'code': 'BA', salary: 11992 },
    // { 'name': 'Botswana', 'code': 'BW', salary: false },
    // { 'name': 'Bouvet Island', 'code': 'BV', salary: false },
    { 'name': 'Brazil', 'code': 'BR', salary: 26464 },
    // { 'name': 'British Indian Ocean Territory', 'code': 'IO', salary: false },
    // { 'name': 'Brunei Darussalam', 'code': 'BN', salary: false },
    { 'name': 'Bulgaria', 'code': 'BG', salary: 23384 },
    // { 'name': 'Burkina Faso', 'code': 'BF', salary: false },
    // { 'name': 'Burundi', 'code': 'BI', salary: false },
    // { 'name': 'Cambodia', 'code': 'KH', salary: false },
    // { 'name': 'Cameroon', 'code': 'CM', salary: false },
    { 'name': 'Canada', 'code': 'CA', salary: 71554 },
    // { 'name': 'Cape Verde', 'code': 'CV', salary: false },
    // { 'name': 'Cayman Islands', 'code': 'KY', salary: false },
    // { 'name': 'Central African Republic', 'code': 'CF', salary: false },
    // { 'name': 'Chad', 'code': 'TD', salary: false },
    { 'name': 'Chile', 'code': 'CL', salary: 31073 },
    { 'name': 'China', 'code': 'CN', salary: 40611 },
    // { 'name': 'Christmas Island', 'code': 'CX', salary: false },
    // { 'name': 'Cocos (Keeling) Islands', 'code': 'CC', salary: false },
    { 'name': 'Colombia', 'code': 'CO', salary: 12894 },
    // { 'name': 'Comoros', 'code': 'KM', salary: false },
    // { 'name': 'Congo', 'code': 'CG', salary: false },
    // { 'name': 'Congo, The Democratic Republic of the', 'code': 'CD', salary: false },
    // { 'name': 'Cook Islands', 'code': 'CK', salary: false },
    { 'name': 'Costa Rica', 'code': 'CR', salary: 40256 },
    { 'name': 'Croatia', 'code': 'HR', salary: 22566 },
    // { 'name': 'Cuba', 'code': 'CU', salary: false },
    // { 'name': 'Cyprus', 'code': 'CY', salary: false },
    { 'name': 'Czech Republic', 'code': 'CZ', salary: 33760 },
    { 'name': 'Denmark', 'code': 'DK', salary: 68778 },
    // { 'name': 'Djibouti', 'code': 'DJ', salary: false },
    // { 'name': 'Dominica', 'code': 'DM', salary: false },
    // { 'name': 'Dominican Republic', 'code': 'DO', salary: false },
    { 'name': 'Ecuador', 'code': 'EC', salary: 35016 },
    { 'name': 'Egypt', 'code': 'EG', salary: 7758 },
    // { 'name': 'El Salvador', 'code': 'SV', salary: false },
    // { 'name': 'Equatorial Guinea', 'code': 'GQ', salary: false },
    // { 'name': 'Eritrea', 'code': 'ER', salary: false },
    { 'name': 'Estonia', 'code': 'EE', salary: 26728 },
    // { 'name': 'Ethiopia', 'code': 'ET', salary: false },
    // { 'name': 'Falkland Islands (Malvinas)', 'code': 'FK', salary: false },
    // { 'name': 'Faroe Islands', 'code': 'FO', salary: false },
    // { 'name': 'Fiji', 'code': 'FJ', salary: false },
    { 'name': 'Finland', 'code': 'FI', salary: 64198 },
    { 'name': 'France', 'code': 'FR', salary: 58137 },
    // { 'name': 'French Guiana', 'code': 'GF', salary: false },
    // { 'name': 'French Polynesia', 'code': 'PF', salary: false },
    // { 'name': 'French Southern Territories', 'code': 'TF', salary: false },
    // { 'name': 'Gabon', 'code': 'GA', salary: false },
    // { 'name': 'Gambia', 'code': 'GM', salary: false },
    { 'name': 'Georgia', 'code': 'GE', salary: 40315 },
    { 'name': 'Germany', 'code': 'DE', salary: 72138 },
    // { 'name': 'Ghana', 'code': 'GH', salary: false },
    // { 'name': 'Gibraltar', 'code': 'GI', salary: false },
    { 'name': 'Greece', 'code': 'GR', salary: 36824 },
    // { 'name': 'Greenland', 'code': 'GL', salary: false },
    // { 'name': 'Grenada', 'code': 'GD', salary: false },
    // { 'name': 'Guadeloupe', 'code': 'GP', salary: false },
    // { 'name': 'Guam', 'code': 'GU', salary: false },
    { 'name': 'Guatemala', 'code': 'GT', salary: 49612 },
    // { 'name': 'Guernsey', 'code': 'GG', salary: false },
    // { 'name': 'Guinea', 'code': 'GN', salary: false },
    // { 'name': 'Guinea-Bissau', 'code': 'GW', salary: false },
    // { 'name': 'Guyana', 'code': 'GY', salary: false },
    // { 'name': 'Haiti', 'code': 'HT', salary: false },
    // { 'name': 'Heard Island and Mcdonald Islands', 'code': 'HM', salary: false },
    { 'name': 'Holy See (Vatican City State)', 'code': 'VA', salary: 51474 },
    // { 'name': 'Honduras', 'code': 'HN', salary: false },
    { 'name': 'Hong Kong', 'code': 'HK', salary: 71970 },
    { 'name': 'Hungary', 'code': 'HU', salary: 22341 },
    { 'name': 'Iceland', 'code': 'IS', salary: 66512 },
    { 'name': 'India', 'code': 'IN', salary: 17710 },
    { 'name': 'Indonesia', 'code': 'ID', salary: 20978 },
    // { 'name': 'Iran, Islamic Republic Of', 'code': 'IR', salary: false },
    { 'name': 'Iraq', 'code': 'IQ', salary: 21029 },
    { 'name': 'Ireland', 'code': 'IE', salary: 66281 },
    // { 'name': 'Isle of Man', 'code': 'IM', salary: false },
    { 'name': 'Israel', 'code': 'IL', salary: 57466 },
    { 'name': 'Italy', 'code': 'IT', salary: 50900 },
    { 'name': 'Jamaica', 'code': 'JM', salary: 21048 },
    { 'name': 'Japan', 'code': 'JP', salary: 57793 },
    // { 'name': 'Jersey', 'code': 'JE', salary: false },
    // { 'name': 'Jordan', 'code': 'JO', salary: false },
    { 'name': 'Kazakhstan', 'code': 'KZ', salary: 12243 },
    // { 'name': 'Kenya', 'code': 'KE', salary: false },
    // { 'name': 'Kiribati', 'code': 'KI', salary: false },
    { 'name': 'Korea, Republic of', 'code': 'KR', salary: 45957 },
    // { 'name': 'Kuwait', 'code': 'KW', salary: false },
    // { 'name': 'Kyrgyzstan', 'code': 'KG', salary: false },
    // { 'name': 'Latvia', 'code': 'LV', salary: false },
    // { 'name': 'Lebanon', 'code': 'LB', salary: false },
    // { 'name': 'Lesotho', 'code': 'LS', salary: false },
    // { 'name': 'Liberia', 'code': 'LR', salary: false },
    // { 'name': 'Libyan Arab Jamahiriya', 'code': 'LY', salary: false },
    // { 'name': 'Liechtenstein', 'code': 'LI', salary: false },
    // { 'name': 'Lithuania', 'code': 'LT', salary: false },
    { 'name': 'Luxembourg', 'code': 'LU', salary: 84663 },
    // { 'name': 'Macao', 'code': 'MO', salary: false },
    // { 'name': 'North Macedonia', 'code': 'MK', salary: false },
    // { 'name': 'Madagascar', 'code': 'MG', salary: false },
    // { 'name': 'Malawi', 'code': 'MW', salary: false },
    { 'name': 'Malaysia', 'code': 'MY', salary: 26117 },
    // { 'name': 'Maldives', 'code': 'MV', salary: false },
    // { 'name': 'Mali', 'code': 'ML', salary: false },
    { 'name': 'Malta', 'code': 'MT', salary: 41971 },
    // { 'name': 'Marshall Islands', 'code': 'MH', salary: false },
    // { 'name': 'Martinique', 'code': 'MQ', salary: false },
    // { 'name': 'Mauritania', 'code': 'MR', salary: false },
    // { 'name': 'Mauritius', 'code': 'MU', salary: false },
    // { 'name': 'Mayotte', 'code': 'YT', salary: false },
    { 'name': 'Mexico', 'code': 'MX', salary: 24050 },
    // { 'name': 'Micronesia, Federated States of', 'code': 'FM', salary: false },
    // { 'name': 'Moldova, Republic of', 'code': 'MD', salary: false },
    // { 'name': 'Monaco', 'code': 'MC', salary: false },
    // { 'name': 'Mongolia', 'code': 'MN', salary: false },
    // { 'name': 'Montserrat', 'code': 'MS', salary: false },
    // { 'name': 'Morocco', 'code': 'MA', salary: 17903 },
    // { 'name': 'Mozambique', 'code': 'MZ', salary: false },
    // { 'name': 'Myanmar', 'code': 'MM', salary: false },
    // { 'name': 'Namibia', 'code': 'NA', salary: false },
    // { 'name': 'Nauru', 'code': 'NR', salary: false },
    // { 'name': 'Nepal', 'code': 'NP', salary: false },
    { 'name': 'Netherlands', 'code': 'NL', salary: 62661 },
    // { 'name': 'Netherlands Antilles', 'code': 'AN', salary: false },
    // { 'name': 'New Caledonia', 'code': 'NC', salary: false },
    // { 'name': 'New Zealand', 'code': 'NZ', salary: 63948 },
    // { 'name': 'Nicaragua', 'code': 'NI', salary: false },
    // { 'name': 'Niger', 'code': 'NE', salary: false },
    // { 'name': 'Nigeria', 'code': 'NG', salary: false },
    // { 'name': 'Niue', 'code': 'NU', salary: false },
    // { 'name': 'Norfolk Island', 'code': 'NF', salary: false },
    // { 'name': 'Northern Mariana Islands', 'code': 'MP', salary: false },
    { 'name': 'Norway', 'code': 'NO', salary: 69498 },
    // { 'name': 'Oman', 'code': 'OM', salary: false },
    { 'name': 'Pakistan', 'code': 'PK', salary: 9066 },
    // { 'name': 'Palau', 'code': 'PW', salary: false },
    // { 'name': 'Palestinian Territory, Occupied', 'code': 'PS', salary: false },
    { 'name': 'Panama', 'code': 'PA', salary: 39143 },
    // { 'name': 'Papua New Guinea', 'code': 'PG', salary: false },
    // { 'name': 'Paraguay', 'code': 'PY', salary: false },
    { 'name': 'Peru', 'code': 'PE', salary: 17469 },
    { 'name': 'Philippines', 'code': 'PH', salary: 11088 },
    // { 'name': 'Pitcairn Islands', 'code': 'PN', salary: false },
    { 'name': 'Poland', 'code': 'PL', salary: 30236 },
    { 'name': 'Portugal', 'code': 'PT', salary: 37959 },
    // { 'name': 'Puerto Rico', 'code': 'PR', salary: false },
    // { 'name': 'Qatar', 'code': 'QA', salary: false },
    // { 'name': 'Reunion', 'code': 'RE', salary: false },
    { 'name': 'Romania', 'code': 'RO', salary: 22319 },
    { 'name': 'Russian Federation', 'code': 'RU', salary: 20492 },
    // { 'name': 'Rwanda', 'code': 'RW', salary: false },
    // { 'name': 'Saint Helena', 'code': 'SH', salary: false },
    // { 'name': 'Saint Kitts and Nevis', 'code': 'KN', salary: false },
    // { 'name': 'Saint Lucia', 'code': 'LC', salary: false },
    // { 'name': 'Saint Pierre and Miquelon', 'code': 'PM', salary: false },
    // { 'name': 'Saint Vincent and the Grenadines', 'code': 'VC', salary: false },
    // { 'name': 'Samoa', 'code': 'WS', salary: false },
    // { 'name': 'San Marino', 'code': 'SM', salary: false },
    // { 'name': 'Sao Tome and Principe', 'code': 'ST', salary: false },
    // { 'name': 'Saudi Arabia', 'code': 'SA', salary: 47336 },
    // { 'name': 'Senegal', 'code': 'SN', salary: false },
    // { 'name': 'Serbia and Montenegro', 'code': 'CS', salary: false },
    // { 'name': 'Seychelles', 'code': 'SC', salary: false },
    // { 'name': 'Sierra Leone', 'code': 'SL', salary: false },
    { 'name': 'Singapore', 'code': 'SG', salary: 66023 },
    { 'name': 'Slovakia', 'code': 'SK', salary: 29650 },
    // { 'name': 'Slovenia', 'code': 'SI', salary: false },
    // { 'name': 'Solomon Islands', 'code': 'SB', salary: false },
    // { 'name': 'Somalia', 'code': 'SO', salary: false },
    { 'name': 'South Africa', 'code': 'ZA', salary: 40336 },
    // { 'name': 'South Georgia and the South Sandwich Islands', 'code': 'GS', salary: false },
    { 'name': 'Spain', 'code': 'ES', salary: 47819 },
    // { 'name': 'Sri Lanka', 'code': 'LK', salary: false },
    // { 'name': 'Sudan', 'code': 'SD', salary: false },
    // { 'name': 'Suriname', 'code': 'SR', salary: false },
    // { 'name': 'Svalbard and Jan Mayen', 'code': 'SJ', salary: false },
    // { 'name': 'Swaziland', 'code': 'SZ', salary: false },
    { 'name': 'Sweden', 'code': 'SE', salary: 49361 },
    { 'name': 'Switzerland', 'code': 'CH', salary: 92820 },
    // { 'name': 'Syrian Arab Republic', 'code': 'SY', salary: false },
    { 'name': 'Taiwan', 'code': 'TW', salary: 47737 },
    // { 'name': 'Tajikistan', 'code': 'TJ', salary: false },
    // { 'name': 'Tanzania, United Republic of', 'code': 'TZ', salary: false },
    { 'name': 'Thailand', 'code': 'TH', salary: 21772 },
    // { 'name': 'Timor-Leste', 'code': 'TL', salary: false },
    // { 'name': 'Togo', 'code': 'TG', salary: false },
    // { 'name': 'Tokelau', 'code': 'TK', salary: false },
    // { 'name': 'Tonga', 'code': 'TO', salary: false },
    // { 'name': 'Trinidad and Tobago', 'code': 'TT', salary: false },
    // { 'name': 'Tunisia', 'code': 'TN', salary: false },
    // { 'name': 'Turkey', 'code': 'TR', salary: 8788 },
    // { 'name': 'Turkmenistan', 'code': 'TM', salary: false },
    // { 'name': 'Turks and Caicos Islands', 'code': 'TC', salary: false },
    // { 'name': 'Tuvalu', 'code': 'TV', salary: false },
    // { 'name': 'Uganda', 'code': 'UG', salary: false },
    { 'name': 'Ukraine', 'code': 'UA', salary: 14139 },
    { 'name': 'United Arab Emirates', 'code': 'AE', salary: 66381 },
    { 'name': 'United Kingdom', 'code': 'GB', salary: 61188 },
    { 'name': 'United States', 'code': 'US', salary: 91935 },
    // { 'name': 'United States Minor Outlying Islands', 'code': 'UM', salary: false },
    // { 'name': 'Uruguay', 'code': 'UY', salary: 23754 },
    // { 'name': 'Uzbekistan', 'code': 'UZ', salary: false },
    // { 'name': 'Vanuatu', 'code': 'VU', salary: false },
    // { 'name': 'Venezuela', 'code': 'VE', salary: false },
    { 'name': 'Vietnam', 'code': 'VN', salary: 19058 },
    // { 'name': 'Virgin Islands, British', 'code': 'VG', salary: false },
    // { 'name': 'Virgin Islands, U.S.', 'code': 'VI', salary: false },
    // { 'name': 'Wallis and Futuna', 'code': 'WF', salary: false },
    // { 'name': 'Western Sahara', 'code': 'EH', salary: false },
    // { 'name': 'Yemen', 'code': 'YE', salary: false },
    // { 'name': 'Zambia', 'code': 'ZM', salary: false },
    // { 'name': 'Zimbabwe', 'code': 'ZN' }
];

