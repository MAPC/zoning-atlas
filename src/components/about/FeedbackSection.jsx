/* eslint-disable max-len */
import React from 'react';
import AccordionField from './AccordionField';

const FeedbackSection = () => (
  <section className="about__section">
    <AccordionField title="I've noticed some data is incomplete or out of date. What should I do?">
      <p>
        You can submit an edit for a zone from either the map view (click on a zoning district and then select &quot;Submit an edit&quot; and the bottom of the popup) or from the table view (click the
        {' '}
        <i className="fas fa-external-link-alt icon" style={{ color: '#00613F' }} />
        {' '}
        icon in the leftmost column of the appropriate row). Both methods will lead you to the same form, which will be sent to our Zoning Atlas team for vetting and potential inclusion.
      </p>
    </AccordionField>
    <AccordionField title="How do I fill out the form? Do I need to fill out every field?">
      <p>
        You do not need to complete every field in order to propose an edit; simply fill in the fields relevant to your edit. If your edit does not fit into any of the fields, you may include it in the General Comments section at the bottom of the form. You do need to fill out your name and email address with each form submission, though, in the event that we need to contact you for further clarification.
      </p>
    </AccordionField>
    <AccordionField title="What should I do if see something I think is off or have general feedback?">
      <p>
        The Zoning Atlas is an open-source project, and your feedback and suggestions are always welcome. If you run into a technical issue while using the site, please email MAPC's Digital Services team at
        {' '}
        <a href="mailto:digitalservices@mapc.org" className="external-site__link">digitalservices@mapc.org</a>
        . Additionally, you can log issues and feature requests directly into our
        {' '}
        <a href="https://github.com/MAPC/zoning-atlas/" className="external-site__link">Github repository</a>
        . You view our roadmap and keep track of our progress on our
        {' '}
        <a href="https://github.com/MAPC/zoning-atlas/projects" className="external-site__link">projects boards</a>
        .
      </p>
      <p>
        If something looks off in our data, you can submit an edit as described above. For further inquiries, feel free to reach out to us at
        {' '}
        <a href="mailto:zoning@mapc.org" className="external-site__link">zoning@mapc.org</a>
        .
      </p>
    </AccordionField>
  </section>
);

export default FeedbackSection;
