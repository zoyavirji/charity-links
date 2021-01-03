const COVID_19 = {
    id: "covid-19",
    title: "COVID-19",
    description: `COVID-19 originated in Wuhan, China. This virus has travelled around the world and has been declared by the world Health Organization 
        as a worldwide pandemic. Over __ deaths have occurred so far with the hardest hit country being America. 
        Coronavirus is a family of viruses that can affect humans and animals. They’re structure is a sphere with spikes of protein surrounding it to 
        infect healthy cells. These spikes also allow the body to acknowledge its presence which then causes the symptoms to show. Because the form of 
        this virus replicated a crown, it is named "corona" meaning crown in Latin. It is said that the virus originated from a bat but this has not yet 
        been proved to be true.`,
    imageUrl: require('./covid-19.jpg'),
    links: [
        {
            name: 'Canada Helps',
            url: 'https://www.canadahelps.org/en/donate-to-coronavirus-outbreak-response/',
        }
    ]
};

const BLACK_LIVES_MATTER = {
    id: "blm",
    title: "Black Lives Matter",
    description: "On May 25 2020, a black man named George Floyd was murdered in Minnesota at the hands of a white cop. Once this   tragic event occurred, many people around the world set up protests to voice their anger with the issue of racism that has    yet to be solved after __ years. Of course during the pandemic large gatherings were discouraged, however, PPE was worn for   those who attended. For the rest of the month of May and almost all of June, hashtags and posts were trending to spread       awareness of the terrible acts of racism in the last __ years. Currently, online petitions and donations are the most         impactful way to help make change and to encourage local authorities to sentence the police who kill black people without     reason.",
    imageUrl: require('./blm.jpg'),
    links: [
        {
            name: 'BLM Canada',
            url: 'https://secure3.convio.net/blmca/site/Donation2;jsessionid=00000000.app30028b?df_id=1480&mfc_pref=T&1480.donation=form1&FR_ID=1060&mfc_pref=T&PROXY_ID=1060&PROXY_TYPE=21/&NONCE_TOKEN=99797F29668989D831EE516645126FAB',
        }
    ]

};

const LEBANON_EXPLOSION = {
    id: "lebanon-explosion",
    title: "Lebanon Explosion",
    description:"At the port of the capital city of Lebanon, Beirut, a massive explosion occurred that destroyed many buildings,    and killed and injured many citizens. Approximately 220 people have confirmed to be dead and around 6000 citizens injured.    Moments after the explosion on the 4th of August 2020, witnesses who were interviewed described the explosion as powerful     and like a shock. The explosion was supposedly caused by ammonium nitrate which was stored for 6 years in the port of         Beirut. The Lebanese government confiscated the ammonium nitrate from an abandoned ship and stored it unsafely for the past   6 years. A few days later, both the Lebanese cabinet and Prime Minister resigned from their duties because of the large       catastrophe created by this explosion.",
    imageUrl: require('./lebanon-explosion.jpg'),
    links: [
        {
            name: 'Lebanese Red Cross',
            url: 'https://supportlrc.app/donate/',
        }
    ]

};

const PALESTINE_HUMAN_RIGHTS = {
    id: "palestine-human-rights",
    title: "Palestine Crisis",
    description: "The human rights in Palestine has been greatly restricted due to the Israeli government's acts of abolishing      goods as well as people in and out of the Gaza Strip and moving Israeli citizens into the Western area, which is considered   illegal by the international humanitarian law. The Gaza Strip, or simply known as Gaza, is a place in Palestine territory     that is self governed and populated by over 2 million Palestine people. It is located just east of the Mediterranean sea.     Many homes were destroyed as well as many people killed.",
    imageUrl: require('./palestine.jpg'),
    links: [
        {
            name: 'Islamic Relief Canada',
            url: 'https://www.islamicreliefcanada.org/appeals/palestine/',
        }
    ]
};

const TURKEY_GENDER_VIOLENCE = {
    id: "turkey-gender-violence",
    title: "Turkey Gender Violence",
    description: "You may have noticed many women post black and white photos of themselves on social media platforms with the      hashtag “challenge accepted”. This challenge was called upon by the women of Turkey to raise awareness of gender based        violence and has been in action since 2016. The incident that flourished this trend again was the murder of Pinar Gültekin.   She was brutally killed by her ex-boyfriend. In Turkey, femicide has been a rising problem with an increasing number of       women murdered. The significance of the challenge photos being monochrome is to imitate the pictures of women on the          newspaper that have been killed.",
    imageUrl: require('./turkey-violence.jpg'),
    links: [
        {
            name: 'Mor Çatı',
            url: 'https://morcati.org.tr/bagis/',
        }
    ]
};

const UYGHUR_MUSLIMS = {
    id: "uyghur-muslims-in-china",
    title: "Uyghur Muslims in China",
    description: "In over 85 concentration camps, located in Xinjiang, China, more than a million Uighur Muslims. The Xinjiang      re-education camps, officially called Vocational Education and Training Centers by the Government of China, are internment    camps operated by the Xinjiang Uygur Autonomous Region government and its CCP committee.In total ASPI identified 380          detention centres established across the region since 2017, ranging from lowest security re-education camps to fortified      prisons.",
    imageUrl: require('./uyghur-protest.jpg'),
    links: [
        {
            name: 'ICNA Relief Canada',
            url: 'https://donate.icnareliefcanada.ca/donation/international?project=Uyghur+Relief',
        }
    ]
};

export const CauseData = [
    COVID_19, BLACK_LIVES_MATTER, LEBANON_EXPLOSION, PALESTINE_HUMAN_RIGHTS, TURKEY_GENDER_VIOLENCE, UYGHUR_MUSLIMS,
];