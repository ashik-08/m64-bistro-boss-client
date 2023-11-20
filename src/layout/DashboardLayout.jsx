import { NavLink, Outlet } from "react-router-dom";
import Container from "../components/Container/Container";
import { IoMdCart } from "react-icons/io";
import { FaBook, FaCalendarAlt, FaListUl } from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";
import { BiSolidWalletAlt, BiSolidContact } from "react-icons/bi";
import { MdReviews } from "react-icons/md";
import { TbBrandBooking } from "react-icons/tb";
import { FiMenu } from "react-icons/fi";
import { SiFoodpanda } from "react-icons/si";
import { ImSpoonKnife } from "react-icons/im";
import { PiUsersThreeFill } from "react-icons/pi";
import useAdmin from "../components/hooks/useAdmin";

const DashboardLayout = () => {
  const [isAdmin] = useAdmin();

  return (
    <section>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content min-h-screen bg-dash-bg">
          {/* Page content here */}
          <label
            htmlFor="my-drawer-2"
            className="btn btn-ghost drawer-button lg:hidden flex justify-end mr-4 mt-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <div className="mt-8 lg:mt-12 mb-20">
            <Container>
              <Outlet />
            </Container>
          </div>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          {/* sidebar content here */}
          <div className="w-72 min-h-screen bg-dash py-12">
            <p className="text-2xl font-cinzel font-black uppercase ml-6">
              Bistro Boss
            </p>
            <p className="text-xl font-cinzel font-medium uppercase tracking-[3px] ml-6">
              Restaurant
            </p>
            <ul className="menu mt-16 space-y-2">
              {isAdmin ? (
                <>
                  <li>
                    <NavLink
                      to="/dashboard/admin-home"
                      className={({ isActive }) =>
                        isActive
                          ? "text-white text-lg md:text-xl font-cinzel font-bold uppercase"
                          : "text-lg md:text-xl font-cinzel font-medium uppercase"
                      }
                    >
                      <AiFillHome />
                      Admin Home
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/dashboard/add-items"
                      className={({ isActive }) =>
                        isActive
                          ? "text-white text-lg md:text-xl font-cinzel font-bold uppercase"
                          : "text-lg md:text-xl font-cinzel font-medium uppercase"
                      }
                    >
                      <ImSpoonKnife />
                      Add Items
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/dashboard/manage-items"
                      className={({ isActive }) =>
                        isActive
                          ? "text-white text-lg md:text-xl font-cinzel font-bold uppercase"
                          : "text-lg md:text-xl font-cinzel font-medium uppercase"
                      }
                    >
                      <FaListUl />
                      Manage Items
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/dashboard/manage-bookings"
                      className={({ isActive }) =>
                        isActive
                          ? "text-white text-lg md:text-xl font-cinzel font-bold uppercase"
                          : "text-lg md:text-xl font-cinzel font-medium uppercase"
                      }
                    >
                      <FaBook />
                      Manage bookings
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/dashboard/users"
                      className={({ isActive }) =>
                        isActive
                          ? "text-white text-lg md:text-xl font-cinzel font-bold uppercase"
                          : "text-lg md:text-xl font-cinzel font-medium uppercase"
                      }
                    >
                      <PiUsersThreeFill />
                      All Users
                    </NavLink>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <NavLink
                      to="/dashboard/home"
                      className={({ isActive }) =>
                        isActive
                          ? "text-white text-lg md:text-xl font-cinzel font-bold uppercase"
                          : "text-lg md:text-xl font-cinzel font-medium uppercase"
                      }
                    >
                      <AiFillHome />
                      User Home
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/dashboard/reservation"
                      className={({ isActive }) =>
                        isActive
                          ? "text-white text-lg md:text-xl font-cinzel font-bold uppercase"
                          : "text-lg md:text-xl font-cinzel font-medium uppercase"
                      }
                    >
                      <FaCalendarAlt />
                      Reservation
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/dashboard/payment"
                      className={({ isActive }) =>
                        isActive
                          ? "text-white text-lg md:text-xl font-cinzel font-bold uppercase"
                          : "text-lg md:text-xl font-cinzel font-medium uppercase"
                      }
                    >
                      <BiSolidWalletAlt />
                      Payment History
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/dashboard/cart"
                      className={({ isActive }) =>
                        isActive
                          ? "text-white text-lg md:text-xl font-cinzel font-bold uppercase"
                          : "text-lg md:text-xl font-cinzel font-medium uppercase"
                      }
                    >
                      <IoMdCart />
                      My Cart
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/dashboard/review"
                      className={({ isActive }) =>
                        isActive
                          ? "text-white text-lg md:text-xl font-cinzel font-bold uppercase"
                          : "text-lg md:text-xl font-cinzel font-medium uppercase"
                      }
                    >
                      <MdReviews />
                      Add Review
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/dashboard/booking"
                      className={({ isActive }) =>
                        isActive
                          ? "text-white text-lg md:text-xl font-cinzel font-bold uppercase"
                          : "text-lg md:text-xl font-cinzel font-medium uppercase"
                      }
                    >
                      <TbBrandBooking />
                      My Booking
                    </NavLink>
                  </li>
                </>
              )}
              {/* <li>
                <NavLink
                  to="/dashboard/home"
                  className={({ isActive }) =>
                    isActive
                      ? "text-white text-lg md:text-xl font-cinzel font-bold uppercase"
                      : "text-lg md:text-xl font-cinzel font-medium uppercase"
                  }
                >
                  <AiFillHome />
                  User Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/reservation"
                  className={({ isActive }) =>
                    isActive
                      ? "text-white text-lg md:text-xl font-cinzel font-bold uppercase"
                      : "text-lg md:text-xl font-cinzel font-medium uppercase"
                  }
                >
                  <FaCalendarAlt />
                  Reservation
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/payment"
                  className={({ isActive }) =>
                    isActive
                      ? "text-white text-lg md:text-xl font-cinzel font-bold uppercase"
                      : "text-lg md:text-xl font-cinzel font-medium uppercase"
                  }
                >
                  <BiSolidWalletAlt />
                  Payment History
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/cart"
                  className={({ isActive }) =>
                    isActive
                      ? "text-white text-lg md:text-xl font-cinzel font-bold uppercase"
                      : "text-lg md:text-xl font-cinzel font-medium uppercase"
                  }
                >
                  <IoMdCart />
                  My Cart
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/review"
                  className={({ isActive }) =>
                    isActive
                      ? "text-white text-lg md:text-xl font-cinzel font-bold uppercase"
                      : "text-lg md:text-xl font-cinzel font-medium uppercase"
                  }
                >
                  <MdReviews />
                  Add Review
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/booking"
                  className={({ isActive }) =>
                    isActive
                      ? "text-white text-lg md:text-xl font-cinzel font-bold uppercase"
                      : "text-lg md:text-xl font-cinzel font-medium uppercase"
                  }
                >
                  <TbBrandBooking />
                  My Booking
                </NavLink>
              </li> */}
            </ul>
            <div className="divider px-5"></div>
            <ul className="menu space-y-2">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive
                      ? "text-white text-lg md:text-xl font-cinzel font-bold uppercase"
                      : "text-lg md:text-xl font-cinzel font-medium uppercase"
                  }
                >
                  <AiFillHome />
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/menu"
                  className={({ isActive }) =>
                    isActive
                      ? "text-white text-lg md:text-xl font-cinzel font-bold uppercase"
                      : "text-lg md:text-xl font-cinzel font-medium uppercase"
                  }
                >
                  <FiMenu />
                  Menu
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/order/offer"
                  className={({ isActive }) =>
                    isActive
                      ? "text-white text-lg md:text-xl font-cinzel font-bold uppercase"
                      : "text-lg md:text-xl font-cinzel font-medium uppercase"
                  }
                >
                  <SiFoodpanda />
                  Order Food
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact-us"
                  className={({ isActive }) =>
                    isActive
                      ? "text-white text-lg md:text-xl font-cinzel font-bold uppercase"
                      : "text-lg md:text-xl font-cinzel font-medium uppercase"
                  }
                >
                  <BiSolidContact />
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardLayout;
