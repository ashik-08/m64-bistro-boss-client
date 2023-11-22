import { Helmet } from "react-helmet-async";
import Title from "../../../components/Dashboard/Title/Title";
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import useAxiosSecure from "../../../components/hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { Card, Typography, CardBody } from "@material-tailwind/react";

const PaymentHistory = () => {
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();
  const TABLE_HEAD = [
    "Transaction ID",
    "Email",
    "Price",
    "Payment Date",
    "Status",
  ];

  const { data: payments } = useQuery({
    queryKey: ["payments", user?.email],
    queryFn: async () => {
      const response = await axiosSecure.get(`/payments/${user.email}`);
      return response.data;
    },
  });

  return (
    <>
      <Helmet>
        <title>Bistro Boss | Payment History</title>
      </Helmet>
      <section>
        <Title subHeading={"---At a Glance!---"} heading={"payment history"} />
        <div className="bg-white p-12 rounded-xl">
          <h1 className="text-xl md:text-2xl xl:text-3xl font-cinzel font-bold uppercase">
            total payments: {payments?.length}
          </h1>
          {/* TABLE */}
          <Card className="h-full w-full p-4 mt-8">
            <CardBody className="overflow-scroll px-0">
              <table className="w-full min-w-max table-auto text-left">
                <thead>
                  <tr>
                    {TABLE_HEAD.map((head) => (
                      <th key={head} className="bg-dash p-4">
                        <Typography
                          variant="paragraph"
                          color="white"
                          className="font-normal leading-none uppercase"
                        >
                          {head}
                        </Typography>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {payments &&
                    payments?.map(
                      (
                        {
                          _id,
                          email,
                          amount,
                          transactionId,
                          paymentDate,
                          status,
                        },
                        index
                      ) => {
                        const isLast = index === payments?.length - 1;
                        const classes = isLast
                          ? "p-4"
                          : "p-4 border-b border-blue-gray-50";

                        return (
                          <tr key={_id}>
                            <td className={classes}>
                              <Typography
                                variant="lead"
                                color="blue-gray"
                                className="font-medium"
                              >
                                {" "}
                                {transactionId}
                              </Typography>
                            </td>
                            <td className={classes}>
                              <Typography
                                variant="lead"
                                color="blue-gray"
                                className="font-medium"
                              >
                                {" "}
                                {email}
                              </Typography>
                            </td>
                            <td className={classes}>
                              <Typography
                                variant="paragraph"
                                className="text-para font-medium capitalize"
                              >
                                ${amount}
                              </Typography>
                            </td>
                            <td className={classes}>
                              <Typography
                                variant="paragraph"
                                className="font-medium"
                              >
                                {paymentDate}
                              </Typography>
                            </td>
                            <td className={classes}>
                              <Typography
                                variant="small"
                                color="blue-gray"
                                className="w-fit px-3 py-1 bg-opacity-80 rounded-md font-medium border border-dash capitalize"
                              >
                                {" "}
                                {status}
                              </Typography>
                            </td>
                          </tr>
                        );
                      }
                    )}
                </tbody>
              </table>
            </CardBody>
          </Card>
        </div>
      </section>
    </>
  );
};

export default PaymentHistory;
