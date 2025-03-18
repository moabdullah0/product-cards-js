import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import useProfile from "../hooks/useProfile";
import {
  backgroundAnimations,
  containerVariants,
  createDetailsCards,
  createStatsItems,
  itemVariants,
} from "../../utils/DetailesProfile";

const ProfilePage = () => {
  const { profile: data, isLoading } = useProfile();
  const [statsItems, setStatsItems] = useState([]);
  const [detailsCards, setDetailsCards] = useState([]);

  useEffect(() => {
    if (data) {
      setStatsItems(createStatsItems(data));
      setDetailsCards(createDetailsCards(data));
    }
  }, [data]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        {Object.entries(backgroundAnimations).map(([key, props]) => (
          <motion.div key={key} {...props} />
        ))}
      </div>

      <motion.div
        className="max-w-lg mx-auto bg-white rounded-2xl shadow-xl overflow-hidden z-10 relative"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        ) : (
          <>
            <div className="h-32 bg-gradient-to-r from-blue-500 to-purple-600"></div>

            <motion.div
              className="relative px-6 py-10"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {/* Profile image */}
              <motion.div
                className="absolute -top-16 left-1/2 transform -translate-x-1/2"
                variants={itemVariants}
              >
                {data?.image ? (
                  <img
                    src={data.image}
                    alt={data?.firstName}
                    className="h-32 w-32 rounded-full border-4 border-white shadow-lg"
                  />
                ) : (
                  <div className="h-32 w-32 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 border-4 border-white shadow-lg flex items-center justify-center">
                    <span className="text-3xl font-bold text-white">
                      {data?.firstName?.[0] || data?.username?.[0] || "U"}
                    </span>
                  </div>
                )}
              </motion.div>

              <motion.div
                className="text-center mt-16 mb-6"
                variants={itemVariants}
              >
                <h2 className="text-2xl font-bold text-gray-800">
                  {data?.firstName && data?.lastName
                    ? `${data.firstName} ${data.lastName}`
                    : data?.username}
                </h2>
                <p className="text-gray-500">{data?.email}</p>
                {data?.company?.title && (
                  <p className="text-blue-600 font-medium mt-1">
                    {data.company.title}
                  </p>
                )}
              </motion.div>

              {/* Stats */}
              <motion.div
                className="flex justify-center space-x-6 mb-8"
                variants={itemVariants}
              >
                {statsItems?.map((item) => (
                  <div key={item.label} className="text-center">
                    <p className="text-2xl font-bold text-gray-800">
                      {item.value || "--"}
                    </p>
                    <p className="text-sm text-gray-500">{item.label}</p>
                  </div>
                ))}
              </motion.div>

              {/* Details cards */}
              <motion.div className="space-y-4" variants={containerVariants}>
                {detailsCards.map(
                  (card) =>
                    (card.condition === undefined || card.condition) && (
                      <motion.div
                        key={card.id}
                        className="bg-gray-50 px-6 py-4 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                        variants={itemVariants}
                        whileHover={{ scale: 1.02 }}
                      >
                        <div className="flex items-center">
                          <div className={`p-2 ${card.bgColor} rounded-lg`}>
                            {React.createElement(card.icon, {
                              className: `w-5 h-5 ${card.textColor}`,
                            })}
                          </div>
                          <div className="ml-4">
                            <p className="text-sm font-medium text-gray-500">
                              {card.label}
                            </p>
                            <p className="mt-1 text-gray-900">{card.value}</p>
                          </div>
                        </div>
                      </motion.div>
                    )
                )}
              </motion.div>

              {/* Action button */}
              <motion.button
                className="w-full mt-8 bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 rounded-xl font-medium shadow-md hover:shadow-lg"
                variants={itemVariants}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                Edit Profile
              </motion.button>
            </motion.div>
          </>
        )}
      </motion.div>
    </div>
  );
};

export default ProfilePage;
