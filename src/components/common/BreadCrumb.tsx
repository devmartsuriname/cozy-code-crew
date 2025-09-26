interface BreadCrumbProps {
  title: string;
  sub_title: string;
}

const BreadCrumb = ({ title, sub_title }: BreadCrumbProps) => {
  return (
    <div className="tg-breadcrumb-area">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="tg-breadcrumb-content text-center">
              <h2 className="tg-breadcrumb-title">{title}</h2>
              <nav>
                <span>{sub_title}</span>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BreadCrumb;