import Mdloader from "@components/Mdloader";
export default function About() {
  return (
    <div>
      <Mdloader></Mdloader>
      <h3 id="donate" className="donate">
        Donate
      </h3>
      <table className="table">
        <tbody>
          <tr>
            <td>
              <form
                action="https://www.paypal.com/cgi-bin/webscr"
                method="post"
                target="_blank"
                style={{ width: "150px", height: "51px" }}
              >
                <input type="hidden" name="cmd" value="_s-xclick" />
                <input
                  type="hidden"
                  name="encrypted"
                  value="-----BEGIN PKCS7-----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-----END PKCS7-----"
                />
                <input
                  type="image"
                  src="/static/btn_donateCC_LG.gif"
                  style={{ border: "0" }}
                  name="submit"
                  alt="PayPal - The safer, easier way to pay online!"
                />
                <img
                  alt=""
                  style={{ border: "0" }}
                  src="https://www.paypalobjects.com/zh_XC/i/scr/pixel.gif"
                  width="1"
                  height="1"
                />
              </form>
            </td>
            <td>
              <img
                src="/static/alipay-qcard.jpg"
                width="300"
                alt=""
                style={{ marginBottom: "-12px" }}
              />
            </td>
            <td>
              <img src="/static/wechat-qcard.png" width="300" alt="" />
            </td>
          </tr>
        </tbody>
      </table>
      <style>{`
        .donate {
          padding-left: 10px;
          border-left: 3px solid #ccc;
        }
        .table {
          width: 100%;
          text-align: center;
          padding: 20px;
        }
      `}</style>
    </div>
  );
}

About.title = "About W3cubTools";
