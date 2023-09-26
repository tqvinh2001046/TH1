export const createUser = (req, res) => {
    return res.render("home", {
      data: { title: "Tạo tài khoản", page: "newUser" },
    });
  };
  
  export const getListUser = (req, res) => {
    const { page = 1 } = req.params;
    const perPage = 5;
    const from = (page - 1) * perPage + 1;
    const to = page * perPage;
    return res.render("home", {
      data: {
        title: "Danh sách tài khoản",
        page: "listUser",
        params: `${from} - ${to}`,
      },
    });
  };
  export const detailUser = (req, res) => {
    res.render("home", {
      data: {
        title: "Chi tiết người dùng",
        params: req.params.username || "",
        page: "detailUser",
      },
    });
  };
  export const login = (req, res) => {
    res.render("home", {
      data: {
        title: "Đăng nhập",
        page: "login",
      },
    });
  };
  