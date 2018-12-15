package org.drc.vat.appmanager;

import java.awt.AWTException;
import java.awt.Robot;
import java.awt.Toolkit;
import java.awt.datatransfer.Clipboard;
import java.awt.datatransfer.StringSelection;
import java.awt.event.KeyEvent;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.Arrays;
import java.util.Objects;
import java.util.Properties;

import javax.xml.bind.DatatypeConverter;

import org.openqa.selenium.By;
import org.openqa.selenium.NoSuchElementException;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;

public class HelperBase {
	public static WebDriver wd;
	private static String bodyMessage = "";
	public static Properties obj = new Properties();
	private static Properties properties;
	private static FileInputStream fis;
	private static File dir = new File(System.getProperty("user.home") + "/Downloads");
	public static boolean flag = false;

	HelperBase(WebDriver wd) {
		HelperBase.wd = wd;
	}

	static {
		try {
			fis = new FileInputStream(System.getProperty("user.dir") + "/src/test/resources/locators.properties");
		} catch (FileNotFoundException e) {
			e.printStackTrace();
		}
	}

	public static void waitFor(String object) {
		WebDriverWait wait = new WebDriverWait(wd, 60);
		By locator = By.xpath(obj.getProperty(object));
		wait.until(ExpectedConditions.elementToBeClickable(locator));
	}

	public static void sleepWait(long wait) throws InterruptedException {
		Thread.sleep(wait);
	}

	public static void clickOn(String object, String data) throws InterruptedException {
		//
		try {
			obj.load(fis);
		} catch (IOException e) {
			e.printStackTrace();
		}
		Thread.sleep(1000);
		wd.findElement(By.xpath(obj.getProperty(object) + data)).click();
	}

	public static String getValue(String object) throws InterruptedException {
		try {
			obj.load(fis);
		} catch (IOException e) {
			e.printStackTrace();
		}
		By locator = By.xpath(obj.getProperty(object));
		// String text;
		return wd.findElement(locator).getAttribute("value");

	}

	public static void type(String object, String data) {

		try {
			obj.load(fis);
		} catch (IOException e) {
			e.printStackTrace();
		}
		By locator = By.xpath(obj.getProperty(object));
		if (data != null) {
			String existingText = wd.findElement(locator).getAttribute("value");
			if (!data.equals(existingText)) {
				wd.findElement(locator).clear();
				wd.findElement(locator).sendKeys(data);
			}
		}
	}

	public static String toastMessage() {
		waitFor("toast_message");
		return text(By.xpath("(//*[contains(@class,'toast-content')])[last()]"));
	}

	public static void saveFile() throws AWTException {
		Arrays.stream(Objects.requireNonNull(new File(String.valueOf(dir)).listFiles())).forEach(File::delete);
		Robot robot = new Robot();
		robot.delay(1000);
		robot.keyPress(KeyEvent.VK_ALT);
		robot.keyPress(KeyEvent.VK_S);
		robot.delay(100);
		robot.keyRelease(KeyEvent.VK_ALT);
		robot.keyRelease(KeyEvent.VK_S);
	}

	public static void verifyDownload(String data) {
		File[] files = dir.listFiles();
		assert files != null;
		for (File file : files) {
			if (file.getName().contains(data)) {
				return;
			}
		}
	}

	void attach(By locator, File file) {
		if (file != null) {
			wd.findElement(locator).sendKeys(file.getAbsolutePath());
		}
	}

	public static String text(By locator) {
		String text;
		return text = wd.findElement(locator).getText();
	}

	boolean isElementPresent(By locator) {
		try {
			wd.findElement(locator);
			return true;
		} catch (NoSuchElementException e) {
			return false;
		}
	}

	public static void logout() throws Exception {
		WebDriverWait wait = new WebDriverWait(wd, 60);
		wait.until(ExpectedConditions
				.invisibilityOfElementLocated(By.xpath("(//*[contains(@class,'toast-content')])[last()]")));
		clickOn("span", "[@class='fa fa-power-off']");

	}

	public static void drp_select(String object, String data) {
		By locator = By.xpath(obj.getProperty(object));
		WebElement drp = wd.findElement(locator);
		Select drp_down = new Select(drp);
		drp_down.selectByValue(data);
	}

	public static void bodymessage1(String object) throws InterruptedException {

		try {

			obj.load(fis);
			String expectedMessage = obj.getProperty(object);
			bodyMessage = wd.findElement(By.tagName("body")).getText();
			Thread.sleep(2000);
			if (bodyMessage.equals(null) || bodyMessage.equals("") || expectedMessage.equals("")) {
				System.out.println("All data are inserted");
			} else {
				if (bodyMessage.toLowerCase().contains(expectedMessage.toLowerCase())) {
					flag = true;
				} else {
					flag = false;
				}
			}

		} catch (Exception e) {
			System.out.println("Body message not verified successfully " + e);
		}
	}

	public static void datePicker(String date) {
		try {
			String d, m, y;
			d = date.substring(8, 10);
			;
			m = date.substring(5, 7);
			y = date.substring(0, 4);
			clickOn("span", "[contains(text(),'2018')]");
			clickOn("span", "[contains(text(),'" + y + "')]");
			if (m.equals("01")) {
				clickOn("span", "[contains(text(),'January')]");
			} else if (m.equals("02")) {
				clickOn("span", "[contains(text(),'February')]");
			} else if (m.equals("03")) {
				clickOn("span", "[contains(text(),'March')]");
			} else if (m.equals("04")) {
				clickOn("span", "[contains(text(),'April')]");
			} else if (m.equals("05")) {
				clickOn("span", "[contains(text(),'May')]");
			} else if (m.equals("06")) {
				clickOn("span", "[contains(text(),'June')]");
			} else if (m.equals("07")) {
				clickOn("span", "[contains(text(),'July')]");
			} else if (m.equals("08")) {
				clickOn("span", "[contains(text(),'August')]");
			} else if (m.equals("09")) {
				clickOn("span", "[contains(text(),'September')]");
			} else if (m.equals("10")) {
				clickOn("span", "[contains(text(),'October')]");
			} else if (m.equals("11")) {
				clickOn("span", "[contains(text(),'November')]");
			} else if (m.equals("12")) {
				clickOn("span", "[contains(text(),'December')]");
			}
			clickOn("span", "[contains(text(),'" + d + "')]");
		} catch (Exception e) {

		}

	}

	public static void call_url(String object) {
		wd.get(obj.getProperty(object));
	}

	public static void check_page_url(String data) throws InterruptedException {
		Thread.sleep(2000);
		wd.getCurrentUrl().equals(obj.getProperty(data));

	}

	public static String validationMessage(String messages) {
		String body_Message = wd.findElement(By.tagName("body")).getText();
		if (body_Message.contains(messages.toLowerCase())) {
			System.out.println("Message Validated");
		}
		return text(By.xpath("//*[@class='text-danger position-absolute error-msg']"));

	}

	public static String elementText(String object) {
		try {
			obj.load(fis);
		} catch (IOException e) {
			e.printStackTrace();
		}
		By locator = By.xpath(obj.getProperty(object));
		// String text;
		return wd.findElement(locator).getText();
	}

	public static String labletext(By locator) {
		String text;
		return text = wd.findElement(locator).getText();
	}

	public static void bodymessage(String expectedMessage) throws InterruptedException {

		try {

			bodyMessage = wd.findElement(By.tagName("body")).getText();
			Thread.sleep(2000);
			if (bodyMessage.equals(null) || bodyMessage.equals("")) {
				System.out.println("Fail");
			} else {
				if (bodyMessage.toLowerCase().contains(expectedMessage.toLowerCase())) {
					System.out.println("Validation message verified successfully " + expectedMessage);
				} else {
					System.out.println("Validation message  not verified successfully " + expectedMessage);
				}
			}

		} catch (Exception e) {

			System.out.println("Body message not verified successfully " + expectedMessage);
		}
	}

	public void auth() throws AWTException {
		String decoded = new String(DatatypeConverter.parseBase64Binary(properties.getProperty("pw")));
		Robot robot = new Robot();
		robotType(robot, properties.getProperty("un"));
		robot.keyPress(KeyEvent.VK_TAB);
		robotType(robot, decoded);
		robot.keyPress(KeyEvent.VK_ENTER);
	}

	public void robotType(Robot robot, String characters) {
		Clipboard clipboard = Toolkit.getDefaultToolkit().getSystemClipboard();
		StringSelection stringSelection = new StringSelection(characters);
		clipboard.setContents(stringSelection, stringSelection);

		robot.delay(500);
		robot.keyPress(KeyEvent.VK_CONTROL);
		robot.keyPress(KeyEvent.VK_V);
		robot.keyRelease(KeyEvent.VK_V);
		robot.keyRelease(KeyEvent.VK_CONTROL);
		robot.delay(500);
	}

	public static void pass() throws AWTException, InterruptedException {
		Robot rb = new Robot();

		// Enter user name in username field
		StringSelection username = new StringSelection("testUser1");
		Toolkit.getDefaultToolkit().getSystemClipboard().setContents(username, null);
		rb.keyPress(KeyEvent.VK_CONTROL);
		rb.keyPress(KeyEvent.VK_V);
		rb.keyRelease(KeyEvent.VK_V);
		rb.keyRelease(KeyEvent.VK_CONTROL);

		// press tab to move to password field
		rb.keyPress(KeyEvent.VK_TAB);
		rb.keyRelease(KeyEvent.VK_TAB);
		Thread.sleep(2000);

		// Enter password in password field
		StringSelection pwd = new StringSelection("testPassword");
		Toolkit.getDefaultToolkit().getSystemClipboard().setContents(pwd, null);
		rb.keyPress(KeyEvent.VK_CONTROL);
		rb.keyPress(KeyEvent.VK_V);
		rb.keyRelease(KeyEvent.VK_V);
		rb.keyRelease(KeyEvent.VK_CONTROL);

		// press enter
		rb.keyPress(KeyEvent.VK_ENTER);
		rb.keyRelease(KeyEvent.VK_ENTER);
	}

	public static void UploadImage(String object, String data) throws Exception {
		try {

			StringSelection stringSelection_filepath = new StringSelection(data);
			Toolkit.getDefaultToolkit().getSystemClipboard().setContents(stringSelection_filepath, null);
			Thread.sleep(500);
			Robot robot = new Robot();
			/**
			 * Press CTRL+V
			 */
			robot.setAutoDelay(100);
			robot.keyPress(KeyEvent.VK_CONTROL);
			robot.keyPress(KeyEvent.VK_V);
			/**
			 * Release CTRL+V
			 */
			robot.keyRelease(KeyEvent.VK_V);
			robot.keyRelease(KeyEvent.VK_CONTROL);
			/**
			 * Press Enter
			 */
			robot.setAutoDelay(100);
			robot.keyPress(KeyEvent.VK_ENTER);
			robot.keyRelease(KeyEvent.VK_ENTER);
			Thread.sleep(5000);

		} catch (Exception e) {

		}
	}

}
