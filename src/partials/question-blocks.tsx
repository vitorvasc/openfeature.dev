import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Translate, { translate } from '@docusaurus/Translate';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFlag, faClipboard } from '@fortawesome/free-regular-svg-icons';
import { faUserGroup } from '@fortawesome/free-solid-svg-icons';

function QuestionBlocks() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Items */}
          <div
            className="max-w-sm mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-16 items-start md:max-w-2xl lg:max-w-none"
            data-aos-id-blocks
          >
            {/* 1st item */}
            <div
              className="relative flex flex-col items-center"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-anchor="[data-aos-id-blocks]"
            >
              <div className="w-16 h-16 mb-4 rounded-full bg-purple-600 relative">
                <FontAwesomeIcon className="absolute top-5 left-6 text-purple-100 fa-xl" icon={faFlag} />
              </div>

              <h4 className="h4 mb-2">
                <Translate
                  id="index.questionBlocks.itemOne.title"
                  description="Question asking what a feature flag is"
                >
                  What's a Feature Flag?
                </Translate>
              </h4>
              <p className="text-lg text-gray-500 dark:text-gray-300 text-center">
                <Translate
                  id="index.questionBlocks.itemOne.description"
                  description="Description explaining what feature flags are"
                >
                  Feature flags are a software development technique that allows teams to enable, disable or change the behavior of certain features or code paths in a product or service, without modifying the source code.
                </Translate>
              </p>
            </div>

            {/* 2nd item */}
            <div
              className="relative flex flex-col items-center"
              data-aos="fade-up"
              data-aos-anchor="[data-aos-id-blocks]"
            >
              <div className="w-16 h-16 mb-4 rounded-full bg-purple-600 relative">
                <FontAwesomeIcon className="absolute top-5 left-[18px] text-purple-100 fa-xl" icon={faUserGroup} />
              </div>
              <h4 className="h4 mb-2">
                <Translate
                  id="index.questionBlocks.itemTwo.title"
                  description="Question asking what OpenFeature is"
                >
                  What's OpenFeature?
                </Translate>
              </h4>
              <p className="text-lg text-gray-500 dark:text-gray-300 text-center">
                {siteConfig.customFields.description as string}
              </p>
            </div>

            {/* 3rd item */}
            <div
              className="relative flex flex-col items-center"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-anchor="[data-aos-id-blocks]"
            >
              <div className="w-16 h-16 mb-4 rounded-full bg-purple-600 relative">
                <FontAwesomeIcon className="absolute top-5 left-6 text-purple-100 fa-xl" icon={faClipboard} />
              </div>
              <h4 className="h4 mb-2">
                <Translate
                  id="index.questionBlocks.itemThree.title"
                  description="Question asking why feature flagging should be standardized"
                >
                  Why standardize?
                </Translate>
              </h4>
              <p className="text-lg text-gray-500 dark:text-gray-300 text-center">
                <Translate
                  id="index.questionBlocks.itemThree.description"
                  description="Description explaining the benefits of standardizing feature flags"
                >
                  Standardizing feature flags unifies tools and vendors behind a common interface, avoiding vendor lock-in at the code level. It provides a framework for building extensions and integrations that can be shared across the community.
                </Translate>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default QuestionBlocks;
