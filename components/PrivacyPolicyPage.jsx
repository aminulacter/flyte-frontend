export default function PrivacyPolicyPage() {
  return (
    <div className="mt-5 lg:mt-40 container lg:px-8 text-gray-800">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
      <p className="text-sm text-gray-500 mb-6">Effective Date: July 29, 2025</p>
      <p className="mb-6">
        At <strong>Flyte Solutions Limited</strong> (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;), your privacy is
        important to us. This Privacy Policy explains how we collect, use, share, and protect your personal
        information when you visit our website:{" "}
        <a href="https://flytesolutions.com" className="text-blue-600 underline">
          https://flytesolutions.com
        </a>{" "}
        (&quot;Site&quot;).
      </p>
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">1. Information We Collect</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>
            <strong>Personal Information:</strong> name, email, phone number, payment details, location.
          </li>
          <li>
            <strong>Technical Information:</strong> IP address, browser type, usage behavior.
          </li>
        </ul>
      </section>
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">2. How We Use Your Information</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>To deliver our services.</li>
          <li>To notify you about updates or changes.</li>
          <li>To improve website experience.</li>
          <li>For other uses with your consent.</li>
        </ul>
      </section>
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">3. Data Security</h2>
        <p className="mb-2">We use technical and administrative measures to protect your personal data, including:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>SSL encryption for secure transmission.</li>
          <li>Internal protocols for access control.</li>
        </ul>
        <p className="mt-2">
          You are also responsible for keeping your credentials secure. Avoid sharing information in public areas of
          the site.
        </p>
      </section>
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">4. Third-Party Disclosure</h2>
        <p className="mb-2">We may share data with trusted third parties, such as:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Google Analytics (for usage insights)</li>
        </ul>
        <p>These services use your data only to fulfill their function on our behalf.</p>
      </section>
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">5. Cookies</h2>
        <p>
          We use cookies to improve user experience and understand how visitors interact with the site. You can control
          cookie settings through your browser preferences.
        </p>
      </section>
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">6. Changes to This Privacy Policy</h2>
        <p>
          We may update this policy periodically. When changes occur, we&apos;ll revise the &quot;Effective Date&quot;
          above and publish the new version here.
        </p>
      </section>
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">7. Contact Us</h2>
        <p>
          If you have questions or concerns about this policy, please email us at:{" "}
          <a href="mailto:info@flytesolutions.com" className="text-blue-600 underline">
            info@flytesolutions.com
          </a>
        </p>
      </section>
    </div>
  );
}
