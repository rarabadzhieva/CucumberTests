package web_services.soap;

import com.eviware.soapui.SoapUI;
import com.eviware.soapui.impl.wsdl.*;
import com.eviware.soapui.impl.wsdl.support.wsdl.WsdlImporter;
import com.eviware.soapui.model.iface.Operation;
import com.eviware.soapui.settings.HttpSettings;
import org.w3c.dom.Document;
import org.xml.sax.InputSource;
import org.xml.sax.SAXException;

import javax.inject.Singleton;
import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.DocumentBuilderFactory;
import javax.xml.parsers.ParserConfigurationException;
import java.io.IOException;
import java.io.StringReader;

@Singleton
public class Support {

    static final String SERVICE_URL = "http://www.dneonline.com/calculator.asmx?WSDL";

    public static String soapEnv = "<soap:Envelope xmlns:soap=\"http://www.w3.org/2003/05/soap-envelope\" xmlns:tem=\"http://tempuri.org/\">\n" +
            "   <soap:Header/>\n" +
            "   <soap:Body>\n" +
            "      <tem:%s>\n" +
            "         <tem:intA>%d</tem:intA>\n" +
            "         <tem:intB>%d</tem:intB>\n" +
            "      </tem:%s>\n" +
            "   </soap:Body>\n" +
            "</soap:Envelope>";

    public static String sendRequest(String endPoint, String xmlRequest, String operationName) {
        String response = "";
        try {
            WsdlProject project = new WsdlProject();
            WsdlInterface[] wsdls = WsdlImporter.importWsdl(project, endPoint);
            WsdlInterface wsdl = wsdls[0];
            SoapUI.getSettings().setBoolean(HttpSettings.RESPONSE_COMPRESSION, false);
            for (Operation operation : wsdl.getOperationList()) {
                WsdlOperation op = (WsdlOperation) operation;
                if (op.getName().equalsIgnoreCase(operationName)) {
                    WsdlRequest wsdlRequest = op.addNewRequest("request");
                    wsdlRequest.setRequestContent(xmlRequest);
                    WsdlSubmitContext wsdlSubmitContext = new WsdlSubmitContext(wsdlRequest);
                    response = wsdlRequest.submit(wsdlSubmitContext, false).getResponse().getContentAsString();
                }
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        return response;
    }

    public static int findResult(String response, String operation) throws ParserConfigurationException, IOException, SAXException {
        DocumentBuilder builder = DocumentBuilderFactory.newInstance().newDocumentBuilder();
        InputSource src = new InputSource();
        src.setCharacterStream(new StringReader(response));
        Document doc = builder.parse(src);
        String result = doc.getElementsByTagName(operation + "Result").item(0).getTextContent();
        return Integer.parseInt(result);
    }
}
